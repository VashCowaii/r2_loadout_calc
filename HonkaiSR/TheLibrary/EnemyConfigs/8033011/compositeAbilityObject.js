const compositeAbilityObject = {
  "fullCharacterName": 8033011,
  "trimCharacterName": 8033011,
  "abilityList": [
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part02",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part01",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part02",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part01",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part02",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part01",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part02",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part01",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part02",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part01",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part02",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part01",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part02",
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part01",
    "8033011_Monster_W1_Mecha03_02_RLElite_Passive01",
    "8033011_Modifiers"
  ],
  "abilityObject": {
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part02": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_ReFreshMark"
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "silent": true
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_W1_Mecha03_02_RLElite_ReFreshMark"
          },
          "ifTargetFound": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "SoldierCount02",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                    "displayLines": "{[Skill05[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[0]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID1",
                      "summonLocation": "FormationRecord"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "SoldierCount01",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID0",
                      "summonLocation": "FormationRecord"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "isRefreshFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "isRefreshFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "WMonster_W1_Mecha_02_PhaseFlag"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "<",
                    "value2": 3
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio": {
                      "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkillInitiate[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkillInitiate[0]]}"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "isRefreshFlag",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part01",
      "childAbilityList": [
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Camera",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part01",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_W1_Mecha03_02_RLElite_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part02": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
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
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.3,
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
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.3,
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
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.4,
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
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part01",
      "childAbilityList": [
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Camera",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part01",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_W1_Mecha03_02_RLElite_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part02": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_ReFreshMark"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "isRefreshFlag",
                  "value": 1
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "silent": true
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount02",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                "displayLines": "{[Skill05[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                "displayLines": "{[Skill05[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID1",
                  "summonLocation": "AfterCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount02",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 803202000,
                "target": {
                  "name": "Target Name",
                  "target": "{{Target Left of Caster}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                    "displayLines": "{[Skill05[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[0]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID1",
                      "summonLocation": "AfterCaster"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                    "displayLines": "{[Skill05[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[0]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID1",
                      "summonLocation": "BeforeCaster"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount01",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID0",
                  "summonLocation": "First"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID0",
                  "summonLocation": "Last"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount01",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID0",
                      "summonLocation": "First"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID0",
                      "summonLocation": "Last"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "isRefreshFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "isRefreshFlag",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_W1_Mecha03_02_RLElite_ReFreshMark"
              },
              "ifTargetFound": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "SoldierCount02",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                        "displayLines": "{[Skill05[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[0]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID1",
                          "summonLocation": "FormationRecord"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "SoldierCount01",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                        "displayLines": "{[Skill05[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill05[1]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID0",
                          "summonLocation": "FormationRecord"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01"
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
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "WMonster_W1_Mecha_02_PhaseFlag"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                "invertCondition": true
              },
              {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "<",
                "value2": 3
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio": {
                  "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkillInitiate[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkillInitiate[0]]}"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part01",
      "childAbilityList": [
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Camera",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part01",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W1_Mecha03_02_RLElite_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part02": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Shot Fired"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkillInitiate[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkillInitiate[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
            "compareType": "=",
            "value2": 3,
            "valueType": "Layer"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                "compareType": "=",
                "value2": 2,
                "valueType": "Layer"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Ability04Mark"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Ability04After"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part01",
      "childAbilityList": [
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Camera",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part01",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W1_Mecha03_02_RLElite_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part02": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_ChargeEffect[<span class=\"descriptionNumberColor\">In Training</span>]"
        },
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "HitSplit": 0.125,
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part01",
      "childAbilityList": [
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Camera",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part01",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W1_Mecha03_02_RLElite_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part02": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part02",
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
            "modifier": "Monster_W1_Mecha03_02_Ability04After"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_02_Ability04After"
            }
          ]
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_ChargeEffect[<span class=\"descriptionNumberColor\">In Training</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part01",
      "childAbilityList": [
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Camera",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part01",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W1_Mecha03_02_RLElite_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part02": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part02",
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part01",
      "childAbilityList": [
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Camera",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part01",
        "8033011_Monster_W1_Mecha03_02_RLElite_Ability01_Part02"
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
          "ability": "Monster_W1_Mecha03_02_RLElite_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "8033011_Monster_W1_Mecha03_02_RLElite_Passive01": {
      "fileName": "8033011_Monster_W1_Mecha03_02_RLElite_Passive01",
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
          "modifier": "W1_Mecha03_02_BattleScore1"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount01",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "SoldierCount01"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "SoldierCount02",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "SoldierCount02"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_RLElite_ResetAI"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_RLElite_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_CoinPassive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha03_02_EffectController"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Monster_W1_Mecha03_02_Effect"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_02_RLElite_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": [
            "SoldierCount01",
            "SoldierCount02"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Mecha03_02_RLElite_ResetAI",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "<=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 9
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 10
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "SoldierCount01",
            "SoldierCount02"
          ]
        }
      ]
    },
    "8033011_Modifiers": {
      "fileName": "8033011_Modifiers",
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
          "for": "Enemy_W1_Mecha03_02_RLElite_ReFreshMark",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier02",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "SoldierCount02",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "SoldierCount02",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "isRefreshFlag",
            "SoldierCount02",
            "SoldierCount01"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Mecha03_02_RLElite_CountingSoldier01",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "SoldierCount01",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "SoldierCount01",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "isRefreshFlag",
            "SoldierCount02",
            "SoldierCount01"
          ]
        }
      ],
      "references": []
    }
  }
}