const compositeAbilityObject = {
  "fullCharacterName": 1012010,
  "trimCharacterName": 1012010,
  "abilityList": [
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability07_Part02",
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability07_Part01",
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability06_Part02",
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability06_Part01",
    "1012010_Monster_W1_CWMecha_03_Ability05_Part02",
    "1012010_Monster_W1_CWMecha_03_Ability05_Part01",
    "1012010_Monster_W1_CWMecha_03_Ability04_Part02",
    "1012010_Monster_W1_CWMecha_03_Ability04_Part01",
    "1012010_Monster_W1_CWMecha_03_Ability03_Part02",
    "1012010_Monster_W1_CWMecha_03_Ability03_Part01",
    "1012010_Monster_W1_CWMecha_03_Ability02_Part02",
    "1012010_Monster_W1_CWMecha_03_Ability02_Part01",
    "1012010_Monster_W1_CWMecha_03_Ability01_Part02",
    "1012010_Monster_W1_CWMecha_03_Ability01_Part01",
    "1012010_Monster_W1_CWMecha_03_AbilityP02",
    "1012010_Monster_W1_CWMecha_03_AbilityP01"
  ],
  "abilityObject": {
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability07_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Alter01_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__31) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__31",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__31"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__31) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__31",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__31"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__31) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__31",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__31"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability07_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Alter01_Ability07_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CWMecha_03_Alter01_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability06_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Alter01_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__30) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__30",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__30"
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_FireTakenRatio[<span class=\"descriptionNumberColor\">Fire Vulnerability</span>]",
          "duration": 3,
          "baseChance": 1,
          "valuePerStack": {
            "MDF_PropertyValue": 0.1
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Alter01_Ability06_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Alter01_Ability06_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CWMecha_03_Alter01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability05_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "healPercent": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability05_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability05_Part01",
      "childAbilityList": [
        "1012010_Monster_W1_CWMecha_03_Ability05_Camera",
        "1012010_Monster_W1_CWMecha_03_Ability05_Part01",
        "1012010_Monster_W1_CWMecha_03_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W1_CWMecha_03_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability04_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__28) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ENEMIES_OBJECT_UNUSED__28 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__28"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__29) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ENEMIES_OBJECT_UNUSED__29 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__29"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
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
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__28) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ENEMIES_OBJECT_UNUSED__28 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__28"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__29) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ENEMIES_OBJECT_UNUSED__29 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__29"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability04_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CWMecha_03_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability03_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (Skill03_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
                  "displayLines": "(Skill03_DamagePercentage * 0.2)",
                  "constants": [
                    0.2
                  ],
                  "variables": [
                    "Skill03_DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "20%"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability03_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CWMecha_03_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability02_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_29) || RETURN",
                  "displayLines": "UnusedUnderThisBase_29",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_29"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_29) || RETURN",
                  "displayLines": "UnusedUnderThisBase_29",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_29"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_29) || RETURN",
                  "displayLines": "UnusedUnderThisBase_29",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_29"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability02_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_CWMecha_03_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability01_Part02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_Ability01_Part01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_Ability01_Part01",
      "childAbilityList": [
        "1012010_Monster_W1_CWMecha_03_Ability01_Camera",
        "1012010_Monster_W1_CWMecha_03_Ability01_Part01",
        "1012010_Monster_W1_CWMecha_03_Ability01_Part02"
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
          "ability": "Monster_W1_CWMecha_03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1012010_Monster_W1_CWMecha_03_AbilityP02": {
      "fileName": "1012010_Monster_W1_CWMecha_03_AbilityP02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance_Controller"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_CWMecha_03_Aura_Resistance",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Aura_AllDamageTypeResistance) || RETURN",
                    "displayLines": "MDF_Aura_AllDamageTypeResistance",
                    "constants": [],
                    "variables": [
                      "MDF_Aura_AllDamageTypeResistance"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_CWMecha_03_Aura_Resistance_Controller",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance",
                  "valuePerStack": {
                    "MDF_Aura_AllDamageTypeResistance": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__27) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__27",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__27"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W1_CWMecha_03_Aura_Resistance",
                      "valuePerStack": {
                        "MDF_Aura_AllDamageTypeResistance": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__27) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__27",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__27"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1012010_Monster_W1_CWMecha_03_AbilityP01": {
      "fileName": "1012010_Monster_W1_CWMecha_03_AbilityP01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_CWMecha_03_Aura_Speed_Controller"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_CWMecha_03_Aura_Speed",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Aura_SpeedUpValue) || RETURN",
                    "displayLines": "MDF_Aura_SpeedUpValue",
                    "constants": [],
                    "variables": [
                      "MDF_Aura_SpeedUpValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_CWMecha_03_Aura_Speed_Controller",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Enemy_W1_CWMecha_03_Aura_Speed",
                  "valuePerStack": {
                    "MDF_Aura_SpeedUpValue": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__26) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__26",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__26"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Enemy_W1_CWMecha_03_Aura_Speed",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W1_CWMecha_03_Aura_Speed",
                      "valuePerStack": {
                        "MDF_Aura_SpeedUpValue": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__26) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__26",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__26"
                          ]
                        },
                        "MDF_Die_Delay": 0.5
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    }
  }
}