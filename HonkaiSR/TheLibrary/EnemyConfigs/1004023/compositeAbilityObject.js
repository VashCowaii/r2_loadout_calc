const compositeAbilityObject = {
  "fullCharacterName": 1004023,
  "trimCharacterName": 1004023,
  "abilityList": [
    "1004023_Monster_W1_Gepard_RL_Ability14_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability14_Part01",
    "1004023_Monster_W1_Gepard_RL_PassiveAbility_Insert2",
    "1004023_Monster_W1_Gepard_RL_PassiveAbility_Insert",
    "1004023_Monster_W1_Gepard_RL_Ability08_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability08_Part01",
    "1004023_Monster_W1_Gepard_RL_Ability07_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability07_Insert",
    "1004023_Monster_W1_Gepard_RL_Ability05_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability05_Part01",
    "1004023_Monster_W1_Gepard_RL_Ability04_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability04_Part01",
    "1004023_Monster_W1_Gepard_RL_Ability03_Insert",
    "1004023_Monster_W1_Gepard_RL_Ability03_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability03_Part01",
    "1004023_Monster_W1_Gepard_RL_Ability02_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability02_Part01",
    "1004023_Monster_W1_Gepard_RL_Ability01_Part02",
    "1004023_Monster_W1_Gepard_RL_Ability01_Part01",
    "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert2",
    "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert",
    "1004023_Monster_W1_Gepard_RL_AbilityP01_EnterBattle",
    "1004023_Monster_W1_Gepard_RL_PassiveAbilityInitiate",
    "1004023_Monster_W1_Gepard_SPRL_AbilityP02_EnterBattle",
    "1004023_Monster_W1_Gepard_RL_AbilityP01_Initiate",
    "1004023_Modifiers"
  ],
  "abilityObject": {
    "1004023_Monster_W1_Gepard_RL_Ability14_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability14_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (Soldier01) || RETURN",
                "displayLines": "Soldier01",
                "constants": [],
                "variables": [
                  "Soldier01"
                ]
              },
              "locationType": "First"
            },
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (Soldier04) || RETURN",
                "displayLines": "Soldier04",
                "constants": [],
                "variables": [
                  "Soldier04"
                ]
              },
              "locationType": "Last"
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
          "name": "UI Display Event",
          "popUpText": "Support"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "UsedEnterBattleFlag",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability14_Part01": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability14_Part01",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_Ability14_Part01",
        "1004023_Monster_W1_Gepard_RL_Ability14_Part02"
      ],
      "skillTrigger": "Skill14",
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
          "ability": "Monster_W1_Gepard_RL_Ability14_Part02",
          "isTrigger": true
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill12",
          "passed": [
            {
              "name": "Animation Task"
            }
          ]
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_PassiveAbility_Insert2": {
      "fileName": "1004023_Monster_W1_Gepard_RL_PassiveAbility_Insert2",
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
          "variableName": "DieInsert_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Die_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"321901706\">Monster_W1_Gepard_RL_Revive</a>"
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
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              }
            }
          ]
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
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
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W1_Gepard_RL_AbilityP01_Insert2",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "priorityTag": "MonsterBattleCry",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_PassiveAbility_Insert": {
      "fileName": "1004023_Monster_W1_Gepard_RL_PassiveAbility_Insert",
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
          "variableName": "DieInsert_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Die_Flag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Insert_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "UsedEnterBattleFlag"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"321901706\">Monster_W1_Gepard_RL_Revive</a>"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "UsedShieldFlag"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"802362263\">Monster_W1_Gepard_RL_AIWatcher</a>"
            }
          ],
          "failed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W1_Gepard_RL_AbilityP01_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability08_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability08_Part02",
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
          "variableName": "ReturnAttackCounter"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
          "duration": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability08_Part01": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability08_Part01",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_Ability08_Part01",
        "1004023_Monster_W1_Gepard_RL_Ability08_Part02",
        "1004023_Monster_W1_Gepard_RL_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W1_Gepard_RL_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability07_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability07_Part02",
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
          "variableName": "ReturnAttackCounter",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
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
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability07_Insert": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability07_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Die_Flag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
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
              "ability": "Monster_W1_Gepard_RL_Ability07_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability05_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2038076408\">Monster_Gepard_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Aggravate</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "multiBase": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advanced",
          "living": true
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability05_Part01": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability05_Part01",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_Ability05_Part01",
        "1004023_Monster_W1_Gepard_RL_Ability05_Part02",
        "1004023_Monster_W1_Gepard_RL_Ability05_Camera"
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
          "ability": "Monster_W1_Gepard_RL_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability04_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-21174358\">MWMonster_W1_Gepard_Instance_DisableAction</a>"
        },
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"352751855\">Monster_W1_Gepard_RL_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability04_Part01": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability04_Part01",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_Ability04_Part01",
        "1004023_Monster_W1_Gepard_RL_Ability04_Part02",
        "1004023_Monster_W1_Gepard_RL_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W1_Gepard_RL_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability03_Insert": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability03_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        },
        {
          "name": "Trigger 0-Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "multiBase": 1
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability03_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability03_Part02",
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
          "variableName": "UsedShieldFlag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-243818097\">SPRL_Flag</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1557546288\">Gepard_SPRL_Shield</a>",
              "valuePerStack": {
                "MDF_ShieldPercentage": {
                  "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                  "displayLines": "{[Skill03[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[1]]}"
                  ]
                },
                "MDF_MaxHPHitPercentage1": {
                  "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                  "displayLines": "{[Skill03[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[2]]}"
                  ]
                },
                "MDF_MaxHPHitPercentage2": {
                  "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                  "displayLines": "{[Skill03[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[3]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"531781317\">Gepard_RL_Shield</a>",
              "valuePerStack": {
                "MDF_ShieldPercentage": {
                  "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                  "displayLines": "{[Skill03[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[1]]}"
                  ]
                },
                "MDF_MaxHPHitPercentage1": {
                  "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                  "displayLines": "{[Skill03[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[2]]}"
                  ]
                },
                "MDF_MaxHPHitPercentage2": {
                  "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                  "displayLines": "{[Skill03[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[3]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability03_Part01": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability03_Part01",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_Ability03_Part01",
        "1004023_Monster_W1_Gepard_RL_Ability03_Part02",
        "1004023_Monster_W1_Gepard_RL_Ability03_Camera",
        "1004023_Monster_W1_Gepard_RL_Ability03_Insert"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W1_Gepard_RL_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability02_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability02_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
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
    "1004023_Monster_W1_Gepard_RL_Ability02_Part01": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability02_Part01",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_Ability02_Part01",
        "1004023_Monster_W1_Gepard_RL_Ability02_Part02",
        "1004023_Monster_W1_Gepard_RL_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W1_Gepard_RL_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_Ability01_Part02": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability01_Part02",
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
            "DamageType": "Ice",
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
    "1004023_Monster_W1_Gepard_RL_Ability01_Part01": {
      "fileName": "1004023_Monster_W1_Gepard_RL_Ability01_Part01",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_Ability01_Part01",
        "1004023_Monster_W1_Gepard_RL_Ability01_Part02",
        "1004023_Monster_W1_Gepard_RL_Ability01_Camera"
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
          "ability": "Monster_W1_Gepard_RL_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert2": {
      "fileName": "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert2",
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
          "variableName": "UsedShieldFlag"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Support"
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill12",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier03) || RETURN",
                        "displayLines": "Soldier03",
                        "constants": [],
                        "variables": [
                          "Soldier03"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier03) || RETURN",
                        "displayLines": "Soldier03",
                        "constants": [],
                        "variables": [
                          "Soldier03"
                        ]
                      },
                      "locationType": "AfterCaster"
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
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-243818097\">SPRL_Flag</a>"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (Soldier03) || RETURN",
                            "displayLines": "Soldier03",
                            "constants": [],
                            "variables": [
                              "Soldier03"
                            ]
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (Soldier03) || RETURN",
                            "displayLines": "Soldier03",
                            "constants": [],
                            "variables": [
                              "Soldier03"
                            ]
                          },
                          "locationType": "Last"
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
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert": {
      "fileName": "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert",
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
          "variableName": "UsedShieldFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"802362263\">Monster_W1_Gepard_RL_AIWatcher</a>"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Support"
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill12",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier01) || RETURN",
                        "displayLines": "Soldier01",
                        "constants": [],
                        "variables": [
                          "Soldier01"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier01) || RETURN",
                        "displayLines": "Soldier01",
                        "constants": [],
                        "variables": [
                          "Soldier01"
                        ]
                      },
                      "locationType": "Last"
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
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"321901706\">Monster_W1_Gepard_RL_Revive</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_AbilityP01_EnterBattle": {
      "fileName": "1004023_Monster_W1_Gepard_RL_AbilityP01_EnterBattle",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill12",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier01) || RETURN",
                        "displayLines": "Soldier01",
                        "constants": [],
                        "variables": [
                          "Soldier01"
                        ]
                      },
                      "locationType": "First"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (Soldier04) || RETURN",
                        "displayLines": "Soldier04",
                        "constants": [],
                        "variables": [
                          "Soldier04"
                        ]
                      },
                      "locationType": "Last"
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
                }
              ]
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Support"
                }
              ]
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "UsedEnterBattleFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_PassiveAbilityInitiate": {
      "fileName": "1004023_Monster_W1_Gepard_RL_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1058077488\">Gepard_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1074855107\">Gepard_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1091632726\">Gepard_BattleScore1</a>"
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_SPRL_AbilityP02_EnterBattle": {
      "fileName": "1004023_Monster_W1_Gepard_SPRL_AbilityP02_EnterBattle",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_SPRL_AbilityP02_EnterBattle"
      ],
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
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
          "variableName": "SPRLCount"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Strike_SPRLCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-243818097\">SPRL_Flag</a>"
        }
      ],
      "references": []
    },
    "1004023_Monster_W1_Gepard_RL_AbilityP01_Initiate": {
      "fileName": "1004023_Monster_W1_Gepard_RL_AbilityP01_Initiate",
      "childAbilityList": [
        "1004023_Monster_W1_Gepard_RL_AbilityP01_Initiate",
        "1004023_Monster_W1_Gepard_RL_AbilityP01_EnterBattle",
        "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert",
        "1004023_Monster_W1_Gepard_RL_AbilityP01_Insert2"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
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
          "variableName": "UsedEnterBattleFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1970380612\">Monster_W1_Gepard_RL_Initiate</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"321901706\">Monster_W1_Gepard_RL_Revive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1151984120\">Enemy_W1_Gepard_Command</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1151984120\">Enemy_W1_Gepard_Command</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Team Action",
                  "conditionsActor": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "conditionsTarget": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2038076408\">Monster_Gepard_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Aggravate</span>]"
                  },
                  "abilityName": "GepardCommand"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1970380612\">Monster_W1_Gepard_RL_Initiate</a>",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "UsedEnterBattleFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Gepard_RL_AbilityP01_EnterBattle",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{All Team Members(Exclude Self)}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Die_Flag",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Insert_Flag",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "DieInsert_Flag",
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
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "DieInsert_Flag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Gepard_RL_PassiveAbility_Insert",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "Set Enemy Phase",
                                  "mode": "Inc"
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W1_Gepard_RL_PassiveAbility_Insert2",
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
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "UsedEnterBattleFlag",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Gepard_RL_AbilityP01_EnterBattle",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBattleCry",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "UsedEnterBattleFlag",
                      "value": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -45
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004023_Modifiers": {
      "fileName": "1004023_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1557546288\">Gepard_SPRL_Shield</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "MDF_Count",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_MaxHPHitPercentage1) || RETURN",
                    "displayLines": "MDF_MaxHPHitPercentage1",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHPHitPercentage1"
                    ]
                  },
                  "consumeFloor": 1
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_MaxHPHitPercentage2) || RETURN",
                    "displayLines": "MDF_MaxHPHitPercentage2",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHPHitPercentage2"
                    ]
                  },
                  "consumeFloor": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-508706525\">Gepard_RL_Break</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Trigger 0-Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      }
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "multiBase": 1
                    }
                  ]
                },
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Create Shield",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team Entity}}"
                      },
                      "targetDisplay": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Constants[0] (0) || RETURN",
                        "displayLines": "0",
                        "constants": [
                          0
                        ],
                        "variables": []
                      },
                      "valuePercent": {
                        "operator": "Variables[0] (MDF_ShieldPercentage) || Constants[0] (5) || DIV || Variables[1] (MDF_Count) || MUL || Variables[2] ({[Skill03[4]]}) || MUL || RETURN",
                        "displayLines": "(((MDF_ShieldPercentage / 5) * MDF_Count) * {[Skill03[4]]})",
                        "constants": [
                          5
                        ],
                        "variables": [
                          "MDF_ShieldPercentage",
                          "MDF_Count",
                          "{[Skill03[4]]}"
                        ]
                      },
                      "formula": "HP Scaling (Shield)"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Shield",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team Entity}}"
                      },
                      "targetDisplay": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Constants[0] (0) || RETURN",
                        "displayLines": "0",
                        "constants": [
                          0
                        ],
                        "variables": []
                      },
                      "valuePercent": {
                        "operator": "Variables[0] (MDF_ShieldPercentage) || Constants[0] (3) || DIV || Variables[1] (MDF_Count) || MUL || RETURN",
                        "displayLines": "((MDF_ShieldPercentage / 3) * MDF_Count)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "MDF_ShieldPercentage",
                          "MDF_Count"
                        ]
                      },
                      "formula": "HP Scaling (Shield)"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Entity}}"
                  },
                  "variableName": "MDF_ShieldValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "assignState": "True"
                }
              ]
            },
            {
              "eventTrigger": "Shield Value Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Entity}}"
                  },
                  "variableName": "MDF_CurrentShield",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentShield) || RETURN",
                    "displayLines": "MDF_CurrentShield",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentShield"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShieldPercentage",
            "MDF_MaxHPHitPercentage1",
            "MDF_MaxHPHitPercentage2"
          ],
          "latentQueue": [
            "UsedShieldFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-243818097\">SPRL_Flag</a>",
          "stackData": [],
          "latentQueue": [
            "SPRLCount",
            "Strike_SPRLCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-508706525\">Gepard_RL_Break</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_Gepard_RL_Ability03_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "UsedShieldFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "stackData": [],
          "latentQueue": [
            "UsedShieldFlag"
          ],
          "description": "Before the Collective Shield ends, enemy targets' Toughness cannot be reduced.",
          "type": "Buff",
          "effectName": "Weakness Protected",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]",
          "stackData": [],
          "latentQueue": [
            "UsedShieldFlag"
          ],
          "description": "A Shield that absorbs DMG taken by all enemies. While the Shield persists, allies' attacks will not reduce the Shielded enemies' HP.",
          "type": "Buff",
          "effectName": "Collective Shield",
          "statusName": "Collective Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1602419899\">Gepard_RL_ShieldPerformance</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "UsedShieldFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__531781317\">Gepard_RL_Shield</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "MDF_Count",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_MaxHPHitPercentage1) || RETURN",
                    "displayLines": "MDF_MaxHPHitPercentage1",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHPHitPercentage1"
                    ]
                  },
                  "consumeFloor": 1
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_MaxHPHitPercentage2) || RETURN",
                    "displayLines": "MDF_MaxHPHitPercentage2",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHPHitPercentage2"
                    ]
                  },
                  "consumeFloor": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1602419899\">Gepard_RL_ShieldPerformance</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>[<span class=\"descriptionNumberColor\">Collective Shield</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-508706525\">Gepard_RL_Break</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Trigger 0-Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      }
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "multiBase": 1
                    }
                  ]
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
                },
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Entity}}"
                  },
                  "targetDisplay": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || Constants[0] (3) || DIV || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "((MDF_ShieldPercentage / 3) * MDF_Count)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "MDF_ShieldPercentage",
                      "MDF_Count"
                    ]
                  },
                  "formula": "HP Scaling (Shield)"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Entity}}"
                  },
                  "variableName": "MDF_ShieldValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "assignState": "True"
                }
              ]
            },
            {
              "eventTrigger": "Shield Value Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Entity}}"
                  },
                  "variableName": "MDF_CurrentShield",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentShield) || RETURN",
                    "displayLines": "MDF_CurrentShield",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentShield"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShieldPercentage",
            "MDF_MaxHPHitPercentage1",
            "MDF_MaxHPHitPercentage2"
          ],
          "latentQueue": [
            "UsedShieldFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1754480095\">Monster_Standard_WeakControl</a>[<span class=\"descriptionNumberColor\">Toughness Protection</span>]",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
          ],
          "stackData": [],
          "latentQueue": [
            "UsedShieldFlag"
          ],
          "description": "Toughness cannot be reduced.",
          "type": "Other",
          "effectName": "Toughness Protection",
          "statusName": "Toughness Protection"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__979801477\">Monster_Standard_Endurance</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__352751855\">Monster_W1_Gepard_RL_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddedRatio * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio",
                      "MDF_Count"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddedRatio"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ReturnAttackCounter",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsFakeAvatarAttack"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Currency Wars Full OffFieldList}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
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
                      "variableName": "ReturnAttackCounter",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "living": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Gepard_RL_Ability07_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
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
            "ReturnAttackCounter"
          ],
          "description": "Uses a Powerful Counter on the attacker after being attacked.",
          "type": "Buff",
          "effectName": "Counter",
          "statusName": "Counter"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__321901706\">Monster_W1_Gepard_RL_Revive</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Die_Flag",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Die_Flag",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>[<span class=\"descriptionNumberColor\">Counter</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-508706525\">Gepard_RL_Break</a>"
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Insert_Flag",
                      "value": 1
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
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W1_Gepard_RL_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
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
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Gepard_RL_PassiveAbility_Insert2",
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
          "for": "<a class=\"gModGreen\" id=\"mod__802362263\">Monster_W1_Gepard_RL_AIWatcher</a>",
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
            }
          ],
          "stackData": [],
          "latentQueue": [
            "UsedShieldFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-810863903\">Monster_Standard_Boss_Dormancy</a>",
          "modifierFlags": [
            "DisableHealHP"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ],
          "duration": 1
        }
      ],
      "references": []
    }
  }
}