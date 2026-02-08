const compositeAbilityObject = {
  "fullCharacterName": 2023021,
  "trimCharacterName": 2023021,
  "abilityList": [
    "2023021_Monster_W2_Beast02_RLElite_Ability05_Part02",
    "2023021_Monster_W2_Beast02_RLElite_Ability05_Part01",
    "2023021_Monster_W2_Beast02_RLElite_Ability04_Part02",
    "2023021_Monster_W2_Beast02_RLElite_Ability04_Part01",
    "2023021_Monster_W2_Beast02_RLElite_Ability03_Part02",
    "2023021_Monster_W2_Beast02_RLElite_Ability03_Part01",
    "2023021_Monster_W2_Beast02_RLElite_Ability02_Part02",
    "2023021_Monster_W2_Beast02_RLElite_Ability02_Part01",
    "2023021_Monster_W2_Beast02_RLElite_Ability01_Part02",
    "2023021_Monster_W2_Beast02_RLElite_Ability01_Part01",
    "2023021_Monster_W2_Beast02_RLElite_AbilityP01_Initiate",
    "2023021_Modifiers"
  ],
  "abilityObject": {
    "2023021_Monster_W2_Beast02_RLElite_Ability05_Part02": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability05_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "60%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability05_Part01": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability05_Part01",
      "childAbilityList": [
        "2023021_Monster_W2_Beast02_RLElite_Ability05_Part01",
        "2023021_Monster_W2_Beast02_RLElite_Ability05_Part02",
        "2023021_Monster_W2_Beast02_RLElite_Ability05_Camera"
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
          "ability": "Monster_W2_Beast02_RLElite_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability04_Part02": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability04_Part01": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability03_Part02": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"974234853\">Monster_W2_Beast02_RLElite_Weak</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability03_Part01": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability03_Part01",
      "childAbilityList": [
        "2023021_Monster_W2_Beast02_RLElite_Ability03_Part01",
        "2023021_Monster_W2_Beast02_RLElite_Ability03_Part02",
        "2023021_Monster_W2_Beast02_RLElite_Ability03_Camera"
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
          "ability": "Monster_W2_Beast02_RLElite_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        }
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability02_Part02": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"296260861\">Monster_W2_Beast02_RLElite_Bullet</a>",
          "counter": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bullet_Count"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Bullet_Count) || RETURN",
            "displayLines": "Bullet_Count",
            "constants": [],
            "variables": [
              "Bullet_Count"
            ]
          },
          "entityClass": "Enemy",
          "maximum": 3,
          "assignState": "True"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1835721372\">Monster_W2_Beast02_RLElite_Edict</a>"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill02[0]]}"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability02_Part01": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability02_Part01",
      "childAbilityList": [
        "2023021_Monster_W2_Beast02_RLElite_Ability02_Part01",
        "2023021_Monster_W2_Beast02_RLElite_Ability02_Part02",
        "2023021_Monster_W2_Beast02_RLElite_Ability02_Camera"
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
          "ability": "Monster_W2_Beast02_RLElite_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability01_Part02": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Bullet_Count",
            "compareType": "=",
            "value2": 3,
            "contextScope": "TargetEntity"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Bullet_Count",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] ({[Skill01[1]]}) || Variables[2] (Bullet_Count) || MUL || ADD || RETURN",
              "displayLines": "({[Skill01[0]]} + ({[Skill01[1]]} * Bullet_Count))",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}",
                "{[Skill01[1]]}",
                "Bullet_Count"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"296260861\">Monster_W2_Beast02_RLElite_Bullet</a>",
          "value": 0
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Bullet_Count"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"329970269\">Enemy_W2_Beast02_RLElite_GennkiMark</a>[<span class=\"descriptionNumberColor\">Gather Courage</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Bullet_Count) || RETURN",
            "displayLines": "Bullet_Count",
            "constants": [],
            "variables": [
              "Bullet_Count"
            ]
          },
          "entityClass": "Enemy",
          "maximum": 3,
          "assignState": "False"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_Ability01_Part01": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_Ability01_Part01",
      "childAbilityList": [
        "2023021_Monster_W2_Beast02_RLElite_Ability01_Part01",
        "2023021_Monster_W2_Beast02_RLElite_Ability01_Part02",
        "2023021_Monster_W2_Beast02_RLElite_Ability01_Camera"
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
          "ability": "Monster_W2_Beast02_RLElite_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023021_Monster_W2_Beast02_RLElite_AbilityP01_Initiate": {
      "fileName": "2023021_Monster_W2_Beast02_RLElite_AbilityP01_Initiate",
      "childAbilityList": [
        "2023021_Monster_W2_Beast02_RLElite_AbilityP01_Initiate"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "Beast02RL_Num_Flag",
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
              "variableName": "Beast02RL_Num_Flag"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Beast02RL_Num_Flag",
          "context": "TargetEntity",
          "value": 1,
          "max": 10
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-992439979\">Enemy_W2_Beast02_RLElite_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"16551050\">Enemy_W2_Beast02_RLElite_ActionCheck</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1589154351\">Enemy_W2_Beast02_RLElite_BreakListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-992439979\">Enemy_W2_Beast02_RLElite_Passive</a>",
          "modifierFlags": [
            "MuteHitFly",
            "ListenBattleEventSkill",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Beast02RL_Num_Flag",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 10
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Beast02RL_Num_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
                      "onlyRemoveOwnersInstance": true,
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1835721372\">Monster_W2_Beast02_RLElite_Edict</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HaveBullet_Flag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"329970269\">Enemy_W2_Beast02_RLElite_GennkiMark</a>[<span class=\"descriptionNumberColor\">Gather Courage</span>]",
                      "stackLimit": 3
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Bullet_Count",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Bullet_Count) || RETURN",
                        "displayLines": "Bullet_Count",
                        "constants": [],
                        "variables": [
                          "Bullet_Count"
                        ]
                      },
                      "entityClass": "Enemy",
                      "maximum": 3,
                      "assignState": "True"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"296260861\">Monster_W2_Beast02_RLElite_Bullet</a>",
                      "function": "Add",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Bullet_Count",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Bullet_Count",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"296260861\">Monster_W2_Beast02_RLElite_Bullet</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HaveBullet_Flag"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1835721372\">Monster_W2_Beast02_RLElite_Edict</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HaveBullet_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Beast02RL_Num_Flag"
          ]
        }
      ]
    },
    "2023021_Modifiers": {
      "fileName": "2023021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1835721372\">Monster_W2_Beast02_RLElite_Edict</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__974234853\">Monster_W2_Beast02_RLElite_Weak</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__296260861\">Monster_W2_Beast02_RLElite_Bullet</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle",
            "RemoveWhenOwnerUnselectable"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
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
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Monitor</span>]"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Beast02RL_Num_Flag"
          ],
          "description": "Marked by %CasterName for Monitoring.",
          "type": "Other",
          "effectName": "Monitor",
          "statusName": "Monitor"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1589154351\">Enemy_W2_Beast02_RLElite_BreakListener</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Bullet_Count",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Bullet_Count",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"296260861\">Monster_W2_Beast02_RLElite_Bullet</a>",
                  "value": 0
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Bullet_Count"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"329970269\">Enemy_W2_Beast02_RLElite_GennkiMark</a>[<span class=\"descriptionNumberColor\">Gather Courage</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"329970269\">Enemy_W2_Beast02_RLElite_GennkiMark</a>[<span class=\"descriptionNumberColor\">Gather Courage</span>]"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Bullet_Count) || RETURN",
                    "displayLines": "Bullet_Count",
                    "constants": [],
                    "variables": [
                      "Bullet_Count"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 3,
                  "assignState": "False"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Action_Flag"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 4
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Beast02RL_Num_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__16551050\">Enemy_W2_Beast02_RLElite_ActionCheck</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Action_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Action_Flag"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "multiBase": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Beast02RL_Num_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__329970269\">Enemy_W2_Beast02_RLElite_GennkiMark</a>[<span class=\"descriptionNumberColor\">Gather Courage</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_PropertyValue",
                  "value": 1,
                  "max": 3
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Beast02RL_Num_Flag"
          ],
          "description": "<span class=\"descriptionNumberColor\">MDF_PropertyValue</span> stacks of Gusto accumulated.",
          "type": "Other",
          "effectName": "Gather Courage",
          "statusName": "Gather Courage",
          "addStacksPerTrigger": 1
        }
      ],
      "references": []
    }
  }
}