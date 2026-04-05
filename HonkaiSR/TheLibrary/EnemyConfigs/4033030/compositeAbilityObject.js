const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4033030,
  "trimCharacterName": 4033030,
  "abilityList": [
    "4033030_Monster_W4_Shooter_01_Ability01_Abort",
    "4033030_Monster_W4_Shooter_01_Ability01_Camera_Insert",
    "4033030_Monster_W4_Shooter_01_Ability01_Part02_Insert",
    "4033030_Monster_W4_Shooter_01_Ability01_Part01_Insert",
    "4033030_Monster_W4_Griffin_01_Ability04_Part02",
    "4033030_Monster_W4_Griffin_01_Ability04_Part01",
    "4033030_Monster_W4_Griffin_01_Ability03_Part02",
    "4033030_Monster_W4_Griffin_01_Ability03_Part01",
    "4033030_Monster_W4_Griffin_01_Ability02_Part02",
    "4033030_Monster_W4_Griffin_01_Ability02_Part01",
    "4033030_Monster_W4_Griffin_01_Ability01_Part02",
    "4033030_Monster_W4_Griffin_01_Ability01_Part01",
    "4033030_Monster_W4_Griffin_01_PassiveAbilityInitiate",
    "4033030_Modifiers"
  ],
  "abilityObject": {
    "4033030_Monster_W4_Shooter_01_Ability01_Abort": {
      "fileName": "4033030_Monster_W4_Shooter_01_Ability01_Abort",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "toRemove": [
            "STAT_CTRL"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Shooter_01_Ability01_Camera_Insert": {
      "fileName": "4033030_Monster_W4_Shooter_01_Ability01_Camera_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Shooter_01_Ability01_Part02_Insert": {
      "fileName": "4033030_Monster_W4_Shooter_01_Ability01_Part02_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-534426566\">W4_Griffin_01_BattleScore1</a>",
          "variableName": "AchievementFlag_W4_Griffin_01",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
              "displayLines": "UnusedUnderThisBase_391",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_391"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
              "displayLines": "UnusedUnderThisBase_392",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_392"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
              "displayLines": "UnusedUnderThisBase_393",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_393"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
              "displayLines": "UnusedUnderThisBase_394",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_394"
              ]
            }
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "value": 10,
          "isFixed": "* ERR"
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
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Shooter_01_Ability01_Part01_Insert": {
      "fileName": "4033030_Monster_W4_Shooter_01_Ability01_Part01_Insert",
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
          "ability": "Monster_W4_Shooter_01_Ability01_Part02_Insert",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability04_Part02": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"170082228\">Enemy_W4_Griffin_01_Ability03_Enhance</a>[<span class=\"descriptionNumberColor\">The Dead Winds Cometh</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_RallyHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPDebt%</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_CurrentHPRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_RallyHP",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (_CurrentHPRatio) || RETURN",
                  "displayLines": "_CurrentHPRatio",
                  "constants": [],
                  "variables": [
                    "_CurrentHPRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_RallyHP",
                  "value": {
                    "operator": "Variables[0] (_RallyHP) || Variables[1] (_CurrentHPRatio) || SUB || RETURN",
                    "displayLines": "(_RallyHP - _CurrentHPRatio)",
                    "constants": [],
                    "variables": [
                      "_RallyHP",
                      "_CurrentHPRatio"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_RallyHP",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (_RallyHP) || Variables[1] (_MaxHP) || MUL || Variables[2] ({[Skill04[1]]}) || MUL || RETURN",
                  "displayLines": "((_RallyHP * _MaxHP) * {[Skill04[1]]})",
                  "constants": [],
                  "variables": [
                    "_RallyHP",
                    "_MaxHP",
                    "{[Skill04[1]]}"
                  ]
                },
                "HitSplit": 0.55,
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability04_Part01": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability04_Part01",
      "childAbilityList": [
        "4033030_Monster_W4_Griffin_01_Ability04_Part01",
        "4033030_Monster_W4_Griffin_01_Ability04_Part02",
        "4033030_Monster_W4_Griffin_01_Ability04_Camera"
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
          "ability": "Monster_W4_Griffin_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability03_Part02": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"170082228\">Enemy_W4_Griffin_01_Ability03_Enhance</a>[<span class=\"descriptionNumberColor\">The Dead Winds Cometh</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability03_Part01": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability03_Part01",
      "childAbilityList": [
        "4033030_Monster_W4_Griffin_01_Ability03_Camera",
        "4033030_Monster_W4_Griffin_01_Ability03_Part01",
        "4033030_Monster_W4_Griffin_01_Ability03_Part02"
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
          "ability": "Monster_W4_Griffin_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability02_Part02": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
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
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
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
                      "locationType": "Last"
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
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1018682036\">Enemy_W4_Griffin_01_Ability02_ShadowControl</a>[<span class=\"descriptionNumberColor\">Chaotic Order</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability02_Part01": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability02_Part01",
      "childAbilityList": [
        "4033030_Monster_W4_Griffin_01_Ability02_Camera",
        "4033030_Monster_W4_Griffin_01_Ability02_Part01",
        "4033030_Monster_W4_Griffin_01_Ability02_Part02"
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
          "ability": "Monster_W4_Griffin_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability01_Part02": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}.[[removeMemosprite]]"
          },
          "variableName": "PosCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 4
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 3
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 4}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 4}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "PosCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
              "valuePerStack": {
                "MDF_RallyTransferRatio": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "MDF_Rally_HealPercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "MDF_Rally_HealUpRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Dark Sun Gryphon: Skill01 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Wind",
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_Ability01_Part01": {
      "fileName": "4033030_Monster_W4_Griffin_01_Ability01_Part01",
      "childAbilityList": [
        "4033030_Monster_W4_Griffin_01_Ability01_Camera",
        "4033030_Monster_W4_Griffin_01_Ability01_Part01",
        "4033030_Monster_W4_Griffin_01_Ability01_Part02"
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}"
          },
          "ability": "Monster_W4_Griffin_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4033030_Monster_W4_Griffin_01_PassiveAbilityInitiate": {
      "fileName": "4033030_Monster_W4_Griffin_01_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1193354499\">Enemy_W4_Griffin_01_AI</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-534426566\">W4_Griffin_01_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4033030_Modifiers": {
      "fileName": "4033030_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-534426566\">W4_Griffin_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "AchievementFlag_W4_Griffin_01",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Battle was Victory",
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "AchievementFlag_W4_Griffin_01",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Just a Tiny Stain",
                          "desc": "Defeat the Dark Sun Gryphon without taking any damage from its summons",
                          "rarity": "Low"
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1193354499\">Enemy_W4_Griffin_01_AI</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                    "invertCondition": true
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__170082228\">Enemy_W4_Griffin_01_Ability03_Enhance</a>[<span class=\"descriptionNumberColor\">The Dead Winds Cometh</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "<=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 3
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
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Uses \"Carol of Heat Death\" in the next action.",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "The Dead Winds Cometh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1018682036\">Enemy_W4_Griffin_01_Ability02_ShadowControl</a>[<span class=\"descriptionNumberColor\">Chaotic Order</span>]",
          "modifierFlags": [
            "MuteSpeed",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_Shooter_01_Ability01_Part01_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_Shooter_01_Ability01_Part02_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_Shooter_01_Ability01_Camera_Insert"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_Shooter_01_Ability01_Abort"
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Shadow",
                  "state": false
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_Attack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_Attack) || Variables[1] ({[Skill02[1]]}) || Constants[0] (1) || SUB || MUL || RETURN",
                    "displayLines": "(_Attack * ({[Skill02[1]]} - 1))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_Attack",
                      "{[Skill02[1]]}"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] ({[Skill02[0]]}) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "({[Skill02[0]]} - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "{[Skill02[0]]}"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                    "displayLines": "{[Skill02[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[2]]}"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target Can Take Action",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W4_Shooter_01_Ability01_Part01_Insert",
                          "priorityTag": "EnemyAttackFromOthers",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W4_Shooter_01_Ability01_Abort",
                          "priorityTag": "DefaultEnemy",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL_Frozen_Effect"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_CTRL_Frozen_Effect"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "\"Archer of the Dark Sun\" does not actively take action, and will only attack after the \"Dark Sun Gryphon\" that summoned this unit attacks. If this unit is under Crowd Control debuffs or Weakness Broken state at this point, this changes to dispelling the Crowd Control debuffs or Weakness Broken state on this unit.",
          "type": "Other",
          "statusName": "Chaotic Order"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1361739248\">Enemy_W4_Griffin_01_Ability02_ShadowControl_Ready</a>"
        }
      ],
      "references": []
    }
  }
}