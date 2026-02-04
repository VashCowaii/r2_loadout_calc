const compositeAbilityObject = {
  "fullCharacterName": 1023010,
  "trimCharacterName": 1023010,
  "abilityList": [
    "1023010_Monster_W1_Mecha_Fire_PassiveAbility_Initiate",
    "1023010_Monster_W1_Mecha_Fire_Ability09_Part02",
    "1023010_Monster_W1_Mecha_Fire_Ability09_Part01",
    "1023010_Monster_W1_Mecha_Fire_Ability08_Part02",
    "1023010_Monster_W1_Mecha_Fire_Ability08_Part01",
    "1023010_Monster_W1_Mecha_Fire_Ability07_Part02",
    "1023010_Monster_W1_Mecha_Fire_Ability07_Part01",
    "1023010_Monster_W1_Mecha_Fire_Ability06_Part02",
    "1023010_Monster_W1_Mecha_Fire_Ability06_Part01",
    "1023010_Monster_W1_Mecha_Fire_Ability02_Part02",
    "1023010_Monster_W1_Mecha_Fire_Ability02_Part01",
    "1023010_Monster_W1_Mecha_Fire_Ability01_Part02",
    "1023010_Monster_W1_Mecha_Fire_Ability01_Part01",
    "1023010_Modifiers"
  ],
  "abilityObject": {
    "1023010_Monster_W1_Mecha_Fire_PassiveAbility_Initiate": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_PassiveAbility_Initiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha_Fire_Initiate"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_01_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "HideMonsterHUD"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "HideMonsterHUD"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_01_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha_Fire_Initiate",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Monster_W1_Mecha_Fire_PassiveCounter_01",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha_Fire_PassiveCounter_01",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_W1_Mecha_Fire_Passive[<span class=\"descriptionNumberColor\">Out of Control</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
                        "displayLines": "{[PassiveSkillInitiate[1]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkillInitiate[1]]}"
                        ]
                      },
                      "valuePerStack": {
                        "ModifierCriticalChanceRatio_PerLayer": {
                          "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkillInitiate[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkillInitiate[0]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Monster_W1_Mecha_Fire_PassiveCounter_01",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1023011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Searing Prowler (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W1_Mecha_Fire_AICounter_01",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "HideMonsterHUD",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1023010_Monster_W1_Mecha_Fire_Ability09_Part02": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_01_HeadEffect"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability09_Part01": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability09_Part01",
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
          "ability": "Monster_W1_Mecha_Fire_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability08_Part02": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_30) || RETURN",
              "displayLines": "UnusedUnderThisBase_30",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_30"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "LightTeam_Count"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "LightTeam_Count",
          "livingTargets": true
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (LightTeam_Count) || RETURN",
            "displayLines": "LightTeam_Count",
            "constants": [],
            "variables": [
              "LightTeam_Count"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
              },
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
                      "operator": "Variables[0] (UnusedUnderThisBase_31) || RETURN",
                      "displayLines": "UnusedUnderThisBase_31",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_31"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_32) || RETURN",
                      "displayLines": "UnusedUnderThisBase_32",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_32"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
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
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_01_HeadEffect"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability08_Part01": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability08_Part01",
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
          "ability": "Monster_W1_Mecha_Fire_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability07_Part02": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability07_Part02",
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill07[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill07[0]]}"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[1]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill07[1]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill07[1]]}"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill07[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill07[0]]}"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[1]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill07[1]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill07[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability07_Part01": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability07_Part01",
      "childAbilityList": [
        "1023010_Monster_W1_Mecha_Fire_Ability07_Camera",
        "1023010_Monster_W1_Mecha_Fire_Ability07_Part01",
        "1023010_Monster_W1_Mecha_Fire_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Mecha_Fire_Ability07_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability06_Part02": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability06_Part02",
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
            "displayLines": "{[Skill06[2]]}",
            "constants": [],
            "variables": [
              "{[Skill06[2]]}"
            ]
          },
          "baseChance": 1,
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability06_Part01": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability06_Part01",
      "childAbilityList": [
        "1023010_Monster_W1_Mecha_Fire_Ability06_Camera",
        "1023010_Monster_W1_Mecha_Fire_Ability06_Part01",
        "1023010_Monster_W1_Mecha_Fire_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_W1_Mecha_Fire_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability02_Part02": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill02[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill02[0]]}"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill02[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "Looped Event",
          "Event": [
            "Move to Next Listed Target",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1023011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Searing Prowler (Bug)"
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1023011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Searing Prowler (Bug)"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                "displayLines": "{[Skill06[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[2]]}"
                ]
              },
              "baseChance": 1,
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                  "displayLines": "{[Skill06[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[1]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability02_Part01": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability02_Part01",
      "childAbilityList": [
        "1023010_Monster_W1_Mecha_Fire_Ability02_Camera",
        "1023010_Monster_W1_Mecha_Fire_Ability02_Part01",
        "1023010_Monster_W1_Mecha_Fire_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_Mecha_Fire_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability01_Part02": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha_Fire_Burning[<span class=\"descriptionNumberColor\">Mania</span>]",
          "valuePerStack": {
            "Modifier_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Modifier_SpeedDelta": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023010_Monster_W1_Mecha_Fire_Ability01_Part01": {
      "fileName": "1023010_Monster_W1_Mecha_Fire_Ability01_Part01",
      "childAbilityList": [
        "1023010_Monster_W1_Mecha_Fire_Ability01_Camera",
        "1023010_Monster_W1_Mecha_Fire_Ability01_Part01",
        "1023010_Monster_W1_Mecha_Fire_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_W1_Mecha_Fire_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023010_Modifiers": {
      "fileName": "1023010_Modifiers",
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
          "for": "Monster_W1_Mecha_Fire_Burning_CD",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha_Fire_Burning[<span class=\"descriptionNumberColor\">Mania</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Mecha_Fire_Burning_CD"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Modifier_AttackAddedRatio) || RETURN",
                    "displayLines": "Modifier_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "Modifier_AttackAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ('Modifier_SpeedDelta) || RETURN",
                    "displayLines": "'Modifier_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "'Modifier_SpeedDelta"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "Modifier_AttackAddedRatio",
            "Modifier_SpeedDelta"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span> and SPD by <span class=\"descriptionNumberColor\">Modifier_SpeedDelta</span> pts.",
          "type": "Buff",
          "effectName": "Mania",
          "statusName": "Mania"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha_Fire_Passive[<span class=\"descriptionNumberColor\">Out of Control</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ModifierCriticalChanceRatio",
                  "value": {
                    "operator": "Variables[0] (ModifierCriticalChanceRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(ModifierCriticalChanceRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "ModifierCriticalChanceRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ModifierCriticalChanceRatio) || RETURN",
                    "displayLines": "ModifierCriticalChanceRatio",
                    "constants": [],
                    "variables": [
                      "ModifierCriticalChanceRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "ModifierCriticalChanceRatio_PerLayer"
          ],
          "latentQueue": [
            "Monster_W1_Mecha_Fire_PassiveCounter_01"
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">ModifierCriticalChanceRatio</span>. Stack up to 5 times.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Out of Control",
          "stackLimit": 5,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha04_01_HeadEffect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
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