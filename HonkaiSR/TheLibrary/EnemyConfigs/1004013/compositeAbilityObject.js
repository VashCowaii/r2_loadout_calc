const compositeAbilityObject = {
  "fullCharacterName": 1004013,
  "trimCharacterName": 1004013,
  "abilityList": [
    "1004013_Boss_Cocolia_P1_Weapon_DeathSetCamera",
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
    "1004013_Boss_Cocolia_P1_Weapon_DeathEffect",
    "1004013_Boss_Cocolia_P1_Weapon_MuteHitFly",
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part03",
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part02",
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part01",
    "1004013_Boss_Cocolia_IF_PassiveAbility_Initiate",
    "1004013_Boss_Cocolia_IF_Ability04_Part01_Camera_Insert",
    "1004013_Boss_Cocolia_IF_Ability04_Part02_Insert",
    "1004013_Boss_Cocolia_IF_Ability04_Part01_Insert",
    "1004013_Boss_Cocolia_IF_Ability04_Part02",
    "1004013_Boss_Cocolia_IF_Ability04_Part01",
    "1004013_Boss_Cocolia_IF_Ability02_Part02",
    "1004013_Boss_Cocolia_IF_Ability02_Part01",
    "1004013_BattleEventAbility_CocoliaP1_RL_Insert",
    "1004013_BattleEventAbility_CocoliaP1_RL",
    "1004013_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
    "1004013_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
    "1004013_Boss_Cocolia_RL_AbilityP07_Part01",
    "1004013_Boss_Cocolia_RL_Ability07_Part02",
    "1004013_Boss_Cocolia_RL_Ability07_Part01",
    "1004013_Boss_Cocolia_RL_Ability05_Part02",
    "1004013_Boss_Cocolia_RL_Ability05_Part01",
    "1004013_Boss_Cocolia_RL_Ability04_Part02",
    "1004013_Boss_Cocolia_RL_Ability04_Part01",
    "1004013_Boss_Cocolia_RL_Ability03_Part02",
    "1004013_Boss_Cocolia_RL_Ability03_Part01",
    "1004013_Boss_Cocolia_RL_Ability02_Part02",
    "1004013_Boss_Cocolia_RL_Ability02_Part01",
    "1004013_Boss_Cocolia_RL_Ability01_Part02",
    "1004013_Boss_Cocolia_RL_Ability01_Part01",
    "1004013_Boss_Cocolia_RL_AIControlAndHPLock",
    "1004013_Boss_Cocolia_RL_PassiveAbility_Initiate",
    "1004013_Boss_Cocolia_RL_IceValue",
    "1004013_Modifiers",
    "1004013_BE_BattleEvents"
  ],
  "abilityObject": {
    "1004013_Boss_Cocolia_P1_Weapon_DeathSetCamera": {
      "fileName": "1004013_Boss_Cocolia_P1_Weapon_DeathSetCamera",
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
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02": {
      "fileName": "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
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
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01": {
      "fileName": "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
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
    "1004013_Boss_Cocolia_P1_Weapon_DeathEffect": {
      "fileName": "1004013_Boss_Cocolia_P1_Weapon_DeathEffect",
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
    "1004013_Boss_Cocolia_P1_Weapon_MuteHitFly": {
      "fileName": "1004013_Boss_Cocolia_P1_Weapon_MuteHitFly",
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
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02": {
      "fileName": "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
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
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01": {
      "fileName": "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
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
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01": {
      "fileName": "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01": {
      "fileName": "1004013_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part03": {
      "fileName": "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part03",
      "childAbilityList": [
        "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part03",
        "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Camera"
      ],
      "skillTrigger": "SkillEvolution",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1652958361\">Monster_W1_Cocolia_IF_RevertSimulationSpeed</a>"
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (Monster_SummonID3) || RETURN",
                "displayLines": "Monster_SummonID3",
                "constants": [],
                "variables": [
                  "Monster_SummonID3"
                ]
              },
              "locationType": "FormationRecord"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1652958361\">Monster_W1_Cocolia_IF_RevertSimulationSpeed</a>"
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W1_CocoliaP2_IF_AbilityPerform01_Part01",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
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
          "name": "Add to Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          }
        }
      ],
      "references": []
    },
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part02": {
      "fileName": "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
          "multiBase": 0.05
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID2",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "ability": "Monster_W1_Gepard_IF_02_Start_Part01"
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
          "variableName": "AIFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part01": {
      "fileName": "1004013_Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part01",
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
          "name": "Create Enemies",
          "delayPercent": 2,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID1",
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
          "variableName": "AIFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004013_Boss_Cocolia_IF_PassiveAbility_Initiate": {
      "fileName": "1004013_Boss_Cocolia_IF_PassiveAbility_Initiate",
      "skillTrigger": "PassiveSkillExtra01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1548980013\">Monster_W1_CocoliaP1_IF_Revive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"514394665\">MModifier_Cocolia_IF_Ability04_SummonCount</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__514394665\">MModifier_Cocolia_IF_Ability04_SummonCount</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 2
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
                      "variableName": "MinionCount",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 4
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<=",
                        "value2": 2
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
                      "variableName": "MinionCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004013_Boss_Cocolia_IF_Ability04_Part01_Camera_Insert": {
      "fileName": "1004013_Boss_Cocolia_IF_Ability04_Part01_Camera_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1004013_Boss_Cocolia_IF_Ability04_Part02_Insert": {
      "fileName": "1004013_Boss_Cocolia_IF_Ability04_Part02_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
            },
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
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1004013_Boss_Cocolia_IF_Ability04_Part01_Insert": {
      "fileName": "1004013_Boss_Cocolia_IF_Ability04_Part01_Insert",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Boss_Cocolia_IF_Ability04_Part02_Insert",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004013_Boss_Cocolia_IF_Ability04_Part02": {
      "fileName": "1004013_Boss_Cocolia_IF_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]"
            },
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
            "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_IF_Ability04_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro}}"
                  },
                  "priorityTag": "PROG_MonsterLowest",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_IF_Ability04_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "PROG_MonsterLowest",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
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
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_IF_Ability04_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro}}"
                  },
                  "priorityTag": "PROG_MonsterLowest",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_IF_Ability04_Part01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "PROG_MonsterLowest",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
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
    "1004013_Boss_Cocolia_IF_Ability04_Part01": {
      "fileName": "1004013_Boss_Cocolia_IF_Ability04_Part01",
      "childAbilityList": [
        "1004013_Boss_Cocolia_RL_Ability04_Part01_Camera",
        "1004013_Boss_Cocolia_IF_Ability04_Part01",
        "1004013_Boss_Cocolia_IF_Ability04_Part02",
        "1004013_Boss_Cocolia_IF_Ability04_Part01_Camera_Insert",
        "1004013_Boss_Cocolia_IF_Ability04_Part01_Insert",
        "1004013_Boss_Cocolia_IF_Ability04_Part02_Insert"
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
          "ability": "Boss_Cocolia_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004013_Boss_Cocolia_IF_Ability02_Part02": {
      "fileName": "1004013_Boss_Cocolia_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (SummonCount) || RETURN",
            "displayLines": "SummonCount",
            "constants": [],
            "variables": [
              "SummonCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 0,
              "execute": [
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
                      "delayPercent": 0.25,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Ice_Lance_ID",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1826725095\">Enemy_W1_CocoliaP1_IF_Summon01</a>"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Ice_Lance_ID_2",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1877057952\">Enemy_W1_CocoliaP1_IF_Summon02</a>"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Summon01Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.5,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Ice_Lance_ID",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1826725095\">Enemy_W1_CocoliaP1_IF_Summon01</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Summon02Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Ice_Lance_ID_2",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1877057952\">Enemy_W1_CocoliaP1_IF_Summon02</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "defaultEvents": []
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Enemy ID",
              "ID": 1004031,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": "Bronya (Complete)"
            }
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
    "1004013_Boss_Cocolia_IF_Ability02_Part01": {
      "fileName": "1004013_Boss_Cocolia_IF_Ability02_Part01",
      "childAbilityList": [
        "1004013_Boss_Cocolia_RL_Ability02_Part01_Camera",
        "1004013_Boss_Cocolia_IF_Ability02_Part01",
        "1004013_Boss_Cocolia_IF_Ability02_Part02"
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
          "ability": "Boss_Cocolia_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004013_BattleEventAbility_CocoliaP1_RL_Insert": {
      "fileName": "1004013_BattleEventAbility_CocoliaP1_RL_Insert",
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
    "1004013_BattleEventAbility_CocoliaP1_RL": {
      "fileName": "1004013_BattleEventAbility_CocoliaP1_RL",
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
    "1004013_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02": {
      "fileName": "1004013_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
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
    "1004013_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01": {
      "fileName": "1004013_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
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
    "1004013_Boss_Cocolia_RL_AbilityP07_Part01": {
      "fileName": "1004013_Boss_Cocolia_RL_AbilityP07_Part01",
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
    "1004013_Boss_Cocolia_RL_Ability07_Part02": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability07_Part02",
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
    "1004013_Boss_Cocolia_RL_Ability07_Part01": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability07_Part01",
      "childAbilityList": [
        "1004013_Boss_Cocolia_RL_Ability07_Part01_Camera",
        "1004013_Boss_Cocolia_RL_Ability07_Part01",
        "1004013_Boss_Cocolia_RL_Ability07_Part02",
        "1004013_Boss_Cocolia_RL_AbilityP07_Part01",
        "1004013_Boss_Cocolia_RL_AbilityP07_Part01_Camera"
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
    "1004013_Boss_Cocolia_RL_Ability05_Part02": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability05_Part02",
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
    "1004013_Boss_Cocolia_RL_Ability05_Part01": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability05_Part01",
      "childAbilityList": [
        "1004013_Boss_Cocolia_RL_Ability05_Part01_Camera",
        "1004013_Boss_Cocolia_RL_Ability05_Part01",
        "1004013_Boss_Cocolia_RL_Ability05_Part02"
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
    "1004013_Boss_Cocolia_RL_Ability04_Part02": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability04_Part02",
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
    "1004013_Boss_Cocolia_RL_Ability04_Part01": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability04_Part01",
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
          "ability": "Boss_Cocolia_RL_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004013_Boss_Cocolia_RL_Ability03_Part02": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability03_Part02",
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
    "1004013_Boss_Cocolia_RL_Ability03_Part01": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability03_Part01",
      "childAbilityList": [
        "1004013_Boss_Cocolia_RL_Ability03_Part01_Camera",
        "1004013_Boss_Cocolia_RL_Ability03_Part01",
        "1004013_Boss_Cocolia_RL_Ability03_Part02"
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
    "1004013_Boss_Cocolia_RL_Ability02_Part02": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability02_Part02",
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
    "1004013_Boss_Cocolia_RL_Ability02_Part01": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability02_Part01",
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
    "1004013_Boss_Cocolia_RL_Ability01_Part02": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability01_Part02",
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
    "1004013_Boss_Cocolia_RL_Ability01_Part01": {
      "fileName": "1004013_Boss_Cocolia_RL_Ability01_Part01",
      "childAbilityList": [
        "1004013_Boss_Cocolia_RL_Ability01_Part01_Camera",
        "1004013_Boss_Cocolia_RL_Ability01_Part01",
        "1004013_Boss_Cocolia_RL_Ability01_Part02"
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
    "1004013_Boss_Cocolia_RL_AIControlAndHPLock": {
      "fileName": "1004013_Boss_Cocolia_RL_AIControlAndHPLock",
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
    "1004013_Boss_Cocolia_RL_PassiveAbility_Initiate": {
      "fileName": "1004013_Boss_Cocolia_RL_PassiveAbility_Initiate",
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
    "1004013_Boss_Cocolia_RL_IceValue": {
      "fileName": "1004013_Boss_Cocolia_RL_IceValue",
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
    "1004013_Modifiers": {
      "fileName": "1004013_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__56709981\">Monster_W1_CocoliaP1_IF_ShareStance</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": 4
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "value": 200
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "addFlat": 200
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
                        "name": "Enemy ID",
                        "ID": 9004075,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill07"
                      }
                    ]
                  },
                  "passed": [
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
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 9004076,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      "ifTargetFound": [
                        {
                          "name": "Clear Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
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
                        },
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "multiBase": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 9004076,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill02"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
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
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "invertCondition": true,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 9004076,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      "ifTargetFound": [
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
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
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Trigger: Break",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1988286434\">Monster_W1_CocoliaP1_IF_HitDamageSplit</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Joint-Attack",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Share DMG Taken",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "selfSplit": 0,
                      "targetSplit": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
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
                },
                {
                  "name": "Clear Weaknesses",
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
            },
            {
              "eventTrigger": "Taking Toughness DMG [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_StanceDMGCount",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxStance) || Variables[1] (MDF_CurrentStance) || SUB || RETURN",
                    "displayLines": "(MDF_MaxStance - MDF_CurrentStance)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxStance",
                      "MDF_CurrentStance"
                    ]
                  }
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceDMGCount) || RETURN",
                    "displayLines": "MDF_StanceDMGCount",
                    "constants": [],
                    "variables": [
                      "MDF_StanceDMGCount"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceDMGCount) || RETURN",
                    "displayLines": "MDF_StanceDMGCount",
                    "constants": [],
                    "variables": [
                      "MDF_StanceDMGCount"
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "canDelay": true,
                  "ToughnessDMGType": "Fire"
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "constantValue": {
                    "operator": "Variables[0] (MDF_MaxStance) || RETURN",
                    "displayLines": "MDF_MaxStance",
                    "constants": [],
                    "variables": [
                      "MDF_MaxStance"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1271809030\">Enemy_W1_CocoliaP2_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1271809030\">Enemy_W1_CocoliaP2_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1288586649\">Enemy_W1_CocoliaP2_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1288586649\">Enemy_W1_CocoliaP2_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1271809030\">Enemy_W1_CocoliaP2_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1271809030\">Enemy_W1_CocoliaP2_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1288586649\">Enemy_W1_CocoliaP2_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1288586649\">Enemy_W1_CocoliaP2_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1271809030\">Enemy_W1_CocoliaP2_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
          "stackType": "Multiple",
          "stackData": [],
          "latentQueue": [],
          "description": "Locked on by Lance of the Eternal Freeze, and will be considered as an additional target for the Annihilator of Desolation Mistral: Mother of Deception's single-target ability.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Nowhere to Escape"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1288586649\">Enemy_W1_CocoliaP2_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
          "stackType": "Multiple",
          "stackData": [],
          "latentQueue": [],
          "description": "Locked on by Lance of the Eternal Freeze, and will be considered as an additional target for the Annihilator of Desolation Mistral: Mother of Deception's single-target ability.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Nowhere to Escape"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "description": "Locked on by the Ice Edge, and will be considered as an additional target for the Annihilator of Desolation Mistral's single-target ability.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Nowhere to Escape"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "description": "Locked on by the Ice Edge, and will be considered as an additional target for the Annihilator of Desolation Mistral's single-target ability.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Nowhere to Escape"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__849088229\">Enemy_W1_CocoliaP2_IF_Summon04</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon04Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon04Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": 1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1219083910\">Lock_A_Target</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Player Team"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
                              "casterAssign": "CasterSelf"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__765844247\">Remove_Target</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__731644896\">Enemy_W1_CocoliaP2_IF_Summon03</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon03Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon03Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": 1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1219083910\">Lock_A_Target</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Player Team"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                              "casterAssign": "CasterSelf"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__765844247\">Remove_Target</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__748422515\">Enemy_W1_CocoliaP2_IF_Summon02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon02Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon02Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": 1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1219083910\">Lock_A_Target</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Player Team"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                              "casterAssign": "CasterSelf"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__765844247\">Remove_Target</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__765200134\">Enemy_W1_CocoliaP2_IF_Summon01</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon01Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon01Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": 1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1219083910\">Lock_A_Target</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Player Team"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                              "casterAssign": "CasterSelf"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__765844247\">Remove_Target</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1877057952\">Enemy_W1_CocoliaP1_IF_Summon02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1146997582\">Enemy_W1_CocoliaP1_IF_Summon02Flag</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1146997582\">Enemy_W1_CocoliaP1_IF_Summon02Flag</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1219083910\">Lock_A_Target</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
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
                            "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Player Team"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                              "casterAssign": "CasterSelf"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__765844247\">Remove_Target</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1146997582\">Enemy_W1_CocoliaP1_IF_Summon02Flag</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon02Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon02Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1826725095\">Enemy_W1_CocoliaP1_IF_Summon01</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Current_Toughness_%",
                    "compareType": "=",
                    "value2": 0,
                    "invertCondition": true
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1664274205\">Enemy_W1_CocoliaP1_IF_Summon01Flag</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1664274205\">Enemy_W1_CocoliaP1_IF_Summon01Flag</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"765844247\">Remove_Target</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1219083910\">Lock_A_Target</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1219083910\">Lock_A_Target</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
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
                            "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Player Team"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                              "casterAssign": "CasterSelf"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__765844247\">Remove_Target</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1664274205\">Enemy_W1_CocoliaP1_IF_Summon01Flag</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon01Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "Summon01Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonCount",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1548980013\">Monster_W1_CocoliaP1_IF_Revive</a>",
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
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
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
                              "abilityName": "Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part02",
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
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
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
                              "abilityName": "Monster_W1_CocoliaP1_IF_ChangePhase_Insert_Part03",
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
            },
            {
              "eventTrigger": "Enter Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1652958361\">Monster_W1_Cocolia_IF_RevertSimulationSpeed</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck"
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
    "1004013_BE_BattleEvents": {
      "fileName": "1004013_BE_BattleEvents",
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