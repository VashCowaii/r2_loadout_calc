const compositeAbilityObject = {
  "fullCharacterName": 1004015,
  "trimCharacterName": 1004015,
  "abilityList": [
    "1004015_Boss_Cocolia_P1_Weapon_DeathSetCamera",
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
    "1004015_Boss_Cocolia_P1_Weapon_DeathEffect",
    "1004015_Boss_Cocolia_P1_Weapon_MuteHitFly",
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
    "1004015_BattleEventAbility_CocoliaP1_VS_Insert",
    "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01_VS",
    "1004015_Boss_Cocolia_RL_Ability04_Part01_VS_Camera",
    "1004015_Boss_Cocolia_RL_Ability04_Part02_VS",
    "1004015_Boss_Cocolia_RL_Ability04_Part01_VS",
    "1004015_Boss_Cocolia_RL_Ability02_Part02_VS",
    "1004015_Boss_Cocolia_RL_Ability02_Part01_VS",
    "1004015_Boss_Cocolia_RL_PassiveAbility_Initiate_VS",
    "1004015_BattleEventAbility_CocoliaP1_RL_Insert",
    "1004015_BattleEventAbility_CocoliaP1_RL",
    "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
    "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
    "1004015_Boss_Cocolia_RL_AbilityP07_Part01",
    "1004015_Boss_Cocolia_RL_Ability07_Part02",
    "1004015_Boss_Cocolia_RL_Ability07_Part01",
    "1004015_Boss_Cocolia_RL_Ability05_Part02",
    "1004015_Boss_Cocolia_RL_Ability05_Part01",
    "1004015_Boss_Cocolia_RL_Ability04_Part02",
    "1004015_Boss_Cocolia_RL_Ability04_Part01",
    "1004015_Boss_Cocolia_RL_Ability03_Part02",
    "1004015_Boss_Cocolia_RL_Ability03_Part01",
    "1004015_Boss_Cocolia_RL_Ability02_Part02",
    "1004015_Boss_Cocolia_RL_Ability02_Part01",
    "1004015_Boss_Cocolia_RL_Ability01_Part02",
    "1004015_Boss_Cocolia_RL_Ability01_Part01",
    "1004015_Boss_Cocolia_RL_AIControlAndHPLock",
    "1004015_Boss_Cocolia_RL_PassiveAbility_Initiate",
    "1004015_Boss_Cocolia_RL_IceValue",
    "1004015_Modifiers",
    "1004015_BE_BattleEvents"
  ],
  "abilityObject": {
    "1004015_Boss_Cocolia_P1_Weapon_DeathSetCamera": {
      "fileName": "1004015_Boss_Cocolia_P1_Weapon_DeathSetCamera",
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
          "modifier": "<a class=\"gModGreen\" id=\"1118324770\">Boss_Cocolia_P1_Weapon_DeathSetCamera</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1118324770\">Boss_Cocolia_P1_Weapon_DeathSetCamera</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-79024859\">BOSS_COCOLIA_BOSS_MDF</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "WeaponDeathCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 2
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "WeaponDeathCount",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        "Deleted bullshit"
                      ]
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
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02": {
      "fileName": "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01": {
      "fileName": "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
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
          "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_P1_Weapon_DeathEffect": {
      "fileName": "1004015_Boss_Cocolia_P1_Weapon_DeathEffect",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1847839650\">Boss_Cocolia_P1_Weapon_DeathEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1847839650\">Boss_Cocolia_P1_Weapon_DeathEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DeathEvent_Trigger_Times",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004015_Boss_Cocolia_P1_Weapon_MuteHitFly": {
      "fileName": "1004015_Boss_Cocolia_P1_Weapon_MuteHitFly",
      "skillTrigger": "PassiveSkill05",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1485263337\">Boss_Cocolia_MuteHitFly_Modifier</a>"
        }
      ],
      "references": []
    },
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02": {
      "fileName": "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED_1",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED_1"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01": {
      "fileName": "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DeathEvent_Trigger_Times",
          "context": "TargetEntity",
          "value": 1,
          "max": 1
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01": {
      "fileName": "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01": {
      "fileName": "1004015_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_BattleEventAbility_CocoliaP1_VS_Insert": {
      "fileName": "1004015_BattleEventAbility_CocoliaP1_VS_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Doomsday Ice Cascade"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "34%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"543576054\">StageAbility_3999913_Modifier_AlwaysSuccess</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": 2,
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
              "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
              "constants": [],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"543576054\">StageAbility_3999913_Modifier_AlwaysSuccess</a>"
        },
        "Trigger: Attack End",
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__543576054\">StageAbility_3999913_Modifier_AlwaysSuccess</a>",
          "modifierFlags": [
            "AlwaysSuccess"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01_VS": {
      "fileName": "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01_VS",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DecisionFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability04_Part01_VS_Camera": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability04_Part01_VS_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability04_Part02_VS": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability04_Part02_VS",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Create Enemies",
          "delayPercent": 0.8,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Ice_Lance_ID_4",
              "summonLocation": "Last"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 1.2,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Ice_Lance_ID_4",
              "summonLocation": "Last"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Ice_Lance_ID_3",
              "summonLocation": "First"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.3,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Ice_Lance_ID_3",
              "summonLocation": "First"
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
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[3]]}"
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
    "1004015_Boss_Cocolia_RL_Ability04_Part01_VS": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability04_Part01_VS",
      "childAbilityList": [
        "1004015_Boss_Cocolia_RL_Ability04_Part01_VS_Camera",
        "1004015_Boss_Cocolia_RL_Ability04_Part01_VS",
        "1004015_Boss_Cocolia_RL_Ability04_Part02_VS"
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
          "ability": "Boss_Cocolia_RL_Ability04_Part02_VS",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability02_Part02_VS": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability02_Part02_VS",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Ice_Lance_ID",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.7,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Ice_Lance_ID_2",
              "summonLocation": "AfterCaster"
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
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[3]]}"
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
    "1004015_Boss_Cocolia_RL_Ability02_Part01_VS": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability02_Part01_VS",
      "childAbilityList": [
        "1004015_Boss_Cocolia_RL_Ability02_Part01_Camera",
        "1004015_Boss_Cocolia_RL_Ability02_Part01_VS",
        "1004015_Boss_Cocolia_RL_Ability02_Part02_VS"
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
          "ability": "Boss_Cocolia_RL_Ability02_Part02_VS",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_PassiveAbility_Initiate_VS": {
      "fileName": "1004015_Boss_Cocolia_RL_PassiveAbility_Initiate_VS",
      "skillTrigger": "PassiveSkill04",
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
          "modifier": "<a class=\"gModGreen\" id=\"-23441886\">Monster_W1_CocoliaP1_RL_Revive_VS</a>"
        }
      ],
      "references": []
    },
    "1004015_BattleEventAbility_CocoliaP1_RL_Insert": {
      "fileName": "1004015_BattleEventAbility_CocoliaP1_RL_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Doomsday Ice Cascade"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "34%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_CocoliaP1_00_RL_BattleEvent_Count",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CocoliaP1_00_RL_BattleEvent_Count",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "STAT_CTRL_Frozen"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": 1,
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
                      "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
                      "constants": [],
                      "variables": [
                        "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "STAT_CTRL_Frozen"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": 1,
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
                      "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
                      "constants": [],
                      "variables": [
                        "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1004015_BattleEventAbility_CocoliaP1_RL": {
      "fileName": "1004015_BattleEventAbility_CocoliaP1_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"826546199\">Modifier_CocoliaP1_RL_BattleEvent</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1295964216\">Modifier_CocoliaP1_RL_BattleEvent_BaseSpeed</a>"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1295964216\">Modifier_CocoliaP1_RL_BattleEvent_BaseSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed) || RETURN",
                    "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02": {
      "fileName": "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1004031,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Bronya (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 100403100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BronyaScore",
              "value": 1
            }
          ]
        },
        {
          "name": "Assign Value to Stat",
          "variableName": "BronyaScoreCheck",
          "value": {
            "operator": "Variables[0] (BronyaScore) || RETURN",
            "displayLines": "BronyaScore",
            "constants": [],
            "variables": [
              "BronyaScore"
            ]
          }
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChargeFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1349231340\">Monster_W1_CocoliaP1_RL_Revive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "DecisionFlag",
            "compareType": "=",
            "value2": 5,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BaseSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20001,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
                "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_Count": 0
              }
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BaseSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20001,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
                "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_Count": 0
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0.05
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DecisionFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01": {
      "fileName": "1004015_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0.5
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID03",
              "summonLocation": "BeforeCaster"
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
          "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DecisionFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_AbilityP07_Part01": {
      "fileName": "1004015_Boss_Cocolia_RL_AbilityP07_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "FrozenScore",
          "context": "TargetEntity",
          "value": 1,
          "max": 5
        },
        "Deleted bullshit",
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill07",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                      "displayLines": "{[Skill07[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
                      "displayLines": "{[Skill07[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill07[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "50%"
                  }
                },
                "Trigger: Attack End"
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_RL_AbilityP07_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "Break",
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability07_Part02": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability07_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
              "displayLines": "{[Skill07[1]]}",
              "constants": [],
              "variables": [
                "{[Skill07[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
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
                    "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1603948168\">StageAbility_GridFight_MonsterTag_2007_Tag</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_RL_AbilityP07_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "Break",
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability07_Part01": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability07_Part01",
      "childAbilityList": [
        "1004015_Boss_Cocolia_RL_Ability07_Part01_Camera",
        "1004015_Boss_Cocolia_RL_Ability07_Part01",
        "1004015_Boss_Cocolia_RL_Ability07_Part02",
        "1004015_Boss_Cocolia_RL_AbilityP07_Part01",
        "1004015_Boss_Cocolia_RL_AbilityP07_Part01_Camera"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Boss_Cocolia_RL_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability05_Part02": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1440219637\">Boss_Cocolia_Endurance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": 1,
          "valuePerStack": {
            "ModifierDamageUpValue": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability05_Part01": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability05_Part01",
      "childAbilityList": [
        "1004015_Boss_Cocolia_RL_Ability05_Part01_Camera",
        "1004015_Boss_Cocolia_RL_Ability05_Part01",
        "1004015_Boss_Cocolia_RL_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Cocolia_BattleScore5_Flag",
          "value": 1
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_RL_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChargeFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability04_Part02": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                "displayLines": "{[Skill04[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                  "displayLines": "{[Skill04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[3]]}"
                  ]
                }
              },
              "success": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1606994047\">Monster_W1_CocoliaP1_RL_Frost</a>"
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability04_Part01": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability04_Part01",
      "childAbilityList": [
        "1004015_Boss_Cocolia_RL_Ability04_Part01_Camera",
        "1004015_Boss_Cocolia_RL_Ability04_Part01",
        "1004015_Boss_Cocolia_RL_Ability04_Part02"
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
          "ability": "Boss_Cocolia_RL_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability03_Part02": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1440219637\">Boss_Cocolia_Endurance</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.33) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.33)",
              "constants": [
                0.33
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.33) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.33)",
              "constants": [
                0.33
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.34) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.34)",
              "constants": [
                0.34
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "34%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChargeFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability03_Part01": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability03_Part01",
      "childAbilityList": [
        "1004015_Boss_Cocolia_RL_Ability03_Part01_Camera",
        "1004015_Boss_Cocolia_RL_Ability03_Part01",
        "1004015_Boss_Cocolia_RL_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Cocolia_BattleScore5_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
        },
        "Ability Start",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_RL_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
        }
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability02_Part02": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "First"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID02",
                  "summonLocation": "AfterCaster"
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1004031,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Bronya (Complete)",
                "invertCondition": true
              },
              {
                "name": "Enemy ID",
                "ID": 100403100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
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
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[3]]}"
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
    "1004015_Boss_Cocolia_RL_Ability02_Part01": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability02_Part01",
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
          "ability": "Boss_Cocolia_RL_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability01_Part02": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
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
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_Ability01_Part01": {
      "fileName": "1004015_Boss_Cocolia_RL_Ability01_Part01",
      "childAbilityList": [
        "1004015_Boss_Cocolia_RL_Ability01_Part01_Camera",
        "1004015_Boss_Cocolia_RL_Ability01_Part01",
        "1004015_Boss_Cocolia_RL_Ability01_Part02"
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
          "ability": "Boss_Cocolia_RL_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004015_Boss_Cocolia_RL_AIControlAndHPLock": {
      "fileName": "1004015_Boss_Cocolia_RL_AIControlAndHPLock",
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "<a class=\"gModGreen\" id=\"2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004015_Boss_Cocolia_RL_PassiveAbility_Initiate": {
      "fileName": "1004015_Boss_Cocolia_RL_PassiveAbility_Initiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1349231340\">Monster_W1_CocoliaP1_RL_Revive</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1098298174\">Monster_W1_CocoliaP1_RL_LockHP</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "1004015_Boss_Cocolia_RL_IceValue": {
      "fileName": "1004015_Boss_Cocolia_RL_IceValue",
      "skillTrigger": "PassiveSkill03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1698013289\">Boss_Cocolia_BattleScore5</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1681235670\">Boss_Cocolia_BattleScore4</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1731568527\">Boss_Cocolia_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1714790908\">Boss_Cocolia_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1765123765\">Boss_Cocolia_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1043898383\">Boss_Cocolia_IceValueManage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1124446035\">Monster_W1_CocoliaP1_RL_IcePower</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1507922859\">Monster_W1_CocoliaP1_RL_LowHP</a>",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[5]]}"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1043898383\">Boss_Cocolia_IceValueManage</a>",
          "counter": 1,
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Assign Value to Stat",
                  "variableName": "FrozenScoreCheck",
                  "value": {
                    "operator": "Variables[0] (FrozenScore) || RETURN",
                    "displayLines": "FrozenScore",
                    "constants": [],
                    "variables": [
                      "FrozenScore"
                    ]
                  }
                }
              ]
            },
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DecisionFlag",
                        "compareType": ">",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "DecisionFlag",
                            "compareType": ">",
                            "value2": 5,
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
                              "variableName": "DecisionFlag",
                              "value": 1
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
                              "variableName": "DecisionFlag",
                              "value": 3
                            }
                          ]
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
                          "variableName": "DecisionFlag",
                          "value": 1
                        }
                      ]
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
                      "variableName": "DecisionFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ChargeFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ChargeFlag"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1507922859\">Monster_W1_CocoliaP1_RL_LowHP</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                          "displayLines": "MDF_LowHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_LowHPRatio"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "LowHPFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "LowHPFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BaseSpeed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20001,
                      "statSource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
                          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[1]]}"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
                        "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
                          "operator": "Variables[0] (BaseSpeed) || RETURN",
                          "displayLines": "BaseSpeed",
                          "constants": [],
                          "variables": [
                            "BaseSpeed"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
                          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[2]]}"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_Count": 0
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LowHPRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "1004015_Modifiers": {
      "fileName": "1004015_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-23441886\">Monster_W1_CocoliaP1_RL_Revive_VS</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "InsertCheck",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "silent": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Minions of Modifier Holder}}"
                              }
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01_VS",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__373337323\">StageAbility_3999913_Modifier_Wave2_HelpListener</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (Ice_Lance_ID) || RETURN",
                      "displayLines": "Ice_Lance_ID",
                      "constants": [],
                      "variables": [
                        "Ice_Lance_ID"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Count",
                      "value": {
                        "operator": "Variables[0] (Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Count"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (Ice_Lance_ID_2) || RETURN",
                      "displayLines": "Ice_Lance_ID_2",
                      "constants": [],
                      "variables": [
                        "Ice_Lance_ID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Count",
                      "value": {
                        "operator": "Variables[0] (Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Count"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Count",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "StageAbility_3999913_Help",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "priorityTag": "LevelPerformAvatar",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__826546199\">Modifier_CocoliaP1_RL_BattleEvent</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_CocoliaP1_RL_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1606994047\">Monster_W1_CocoliaP1_RL_Frost</a>",
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_SpeedAddedRatio_PerLayer * ModifierLayers))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_SpeedAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": null,
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_3) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED_3",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED_3"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_4) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED_4",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED_4"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                              "displayLines": "MDF_DamageUpRatio_PerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUpRatio_PerLayer"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                              "displayLines": "MDF_DamageUpRatio_PerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUpRatio_PerLayer"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL_Frozen"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DamageUpFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1124446035\">Monster_W1_CocoliaP1_RL_IcePower</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                              "displayLines": "MDF_DamageUpRatio_PerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUpRatio_PerLayer"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                              "displayLines": "MDF_DamageUpRatio_PerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUpRatio_PerLayer"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DamageUpFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ModifierDamageUpValue) || RETURN",
                    "displayLines": "ModifierDamageUpValue",
                    "constants": [],
                    "variables": [
                      "ModifierDamageUpValue"
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
            "ModifierDamageUpValue"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">ModifierDamageUpValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1349231340\">Monster_W1_CocoliaP1_RL_Revive</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "InsertCheck",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "silent": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "DecisionFlag",
                                "compareType": "=",
                                "value2": 5,
                                "contextScope": "TargetEntity"
                              }
                            },
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "silent": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "1004015_BE_BattleEvents": {
      "fileName": "1004015_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20001,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_CocoliaP1_RL",
            "BattleEventAbility_CocoliaP1_RL_Insert"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    }
  }
}