const compositeAbilityObject = {
  "fullCharacterName": 4033022,
  "trimCharacterName": 4033022,
  "abilityList": [
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability04_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability04_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part01",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part02",
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part01",
    "4033022_BattleEvent_W4_Claymore_01_LocalLegend_Part01",
    "4033022_BattleEvent_W4_Claymore_01_LocalLegend_EnterReady",
    "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Recover",
    "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Insert",
    "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbilityInitiate",
    "4033022_Modifiers",
    "4033022_Functions",
    "4033022_BE_BattleEvents"
  ],
  "abilityObject": {
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part02": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Every Battle Entity}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID02) || RETURN",
                      "displayLines": "SummonID02",
                      "constants": [],
                      "variables": [
                        "SummonID02"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                }
              ]
            },
            "compareType": "=",
            "value2": 0,
            "livingTargets": true
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
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID02) || RETURN",
                    "displayLines": "SummonID02",
                    "constants": [],
                    "variables": [
                      "SummonID02"
                    ]
                  },
                  "locationType": "KeepOnFirst"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1813832219\">Enemy_W4_Claymore_01_LocalLegend_BlackSummon</a>"
            },
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "refPoint": "After",
              "isStartingAV": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Every Battle Entity}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID01) || RETURN",
                      "displayLines": "SummonID01",
                      "constants": [],
                      "variables": [
                        "SummonID01"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                }
              ]
            },
            "compareType": "=",
            "value2": 0,
            "livingTargets": true
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
              "refreshPositions": false,
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
                  "locationType": "KeepOnLast"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1813832219\">Enemy_W4_Claymore_01_LocalLegend_BlackSummon</a>"
            },
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "refPoint": "After",
              "isStartingAV": true
            }
          ]
        },
        {
          "name": "Create AV Link",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
          },
          "linkOrder": 1,
          "isStart": true,
          "linkFollowerModifications": {
            "OnBreak": "Bit_AutoForceSync"
          },
          "linkOwnerModifications": {
            "OnBreak": "Bit_AutoForceSync"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
          },
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
                "modifier": "<a class=\"gModGreen\" id=\"783794549\">Enemy_W4_Shooter_01_Effect</a>",
                "invertCondition": true
              },
              {
                "name": "Enemy ID",
                "ID": 403205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
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
              "modifier": "<a class=\"gModGreen\" id=\"783794549\">Enemy_W4_Shooter_01_Effect</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part01": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part01",
      "childAbilityList": [
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Camera",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part01",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability05_Part02"
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
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability04_Part02": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
              "displayLines": "UnusedUnderThisBase_154",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
              "displayLines": "UnusedUnderThisBase_154",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
              "displayLines": "UnusedUnderThisBase_154",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_154"
              ]
            },
            "HitSplit": 0.5,
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
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability04_Part01": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability04_Part01",
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
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part02": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          }
        },
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
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
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
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part01": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part01",
      "childAbilityList": [
        "4033022_Monster_W4_Claymore_01_Ability03_Camera",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part01",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability03_Part02"
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
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part02": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1804376736\">W4_Claymore_01_LocalLegend_BattleScoreMark</a>"
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
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Light Praetor: 3}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_EnterBattle",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck04",
          "value": 1
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-726340599\">Enemy_W4_Claymore_01_LocalLegend_ElationListener</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Light Praetor: 3}}"
            }
          },
          "passed": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              },
              "display": false
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Dark Praetor: Self}}"
            }
          },
          "passed": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Self}}"
              },
              "display": true
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Self}}"
              },
              "variableName": "_BossUI",
              "value": 0
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Every Battle Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Every Battle Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
        }
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part01": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part01",
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
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability021_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part02": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Light Praetor: 3}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertCheck03",
          "value": 1
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}} + {{EVENT[RoT] Light Praetor: Light Summons}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Every Battle Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            "compareType": "<=",
            "value2": 2,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{BattleEvent20034}}"
              },
              "variableName": "_SelectTimes",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{BattleEvent20034}}"
              },
              "variableName": "_SelectTimes",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1358856185\">Enemy_W4_Claymore_01_LocalLegend_TargetSelectPrepare</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_EnterBattle",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "skillType": "ControlSkill03",
              "target": {
                "name": "Add Target by Unique Identifier",
                "identifier": "SelectTarget"
              },
              "afterInjection": []
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"357625087\">Monster_W4_Claymore_01_LocalLegend_Locking</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__357625087\">Monster_W4_Claymore_01_LocalLegend_Locking</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{BattleEvent20034}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "#CL_IsTriggerEffect",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_IsTriggerEffect",
                          "value": 1
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
            "InsertCheck03",
            "_SelectTimes",
            "_EnterBattle"
          ]
        }
      ]
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part01": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part01",
      "childAbilityList": [
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Camera",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part01",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability02_Part02",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part01",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Part02",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability021_Camera"
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
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part02": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
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
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part01": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Camera",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part01",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part02",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part01",
        "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part02"
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
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part02": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_FirstProgressInfo",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_FirstProgressInfo",
              "value": 1
            },
            {
              "name": "Start Battle Track Progress",
              "progress": 0,
              "count": 100,
              "ID": "#1%",
              "desc": "The Other Boss's Remaining HP"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: 3}}"
              },
              "variableName": "_CurrentHPRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Light Praetor: 3}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
              },
              "passed": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": 0,
                  "count": 0,
                  "ID": "#1%"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CurrentHPRatio",
                    "compareType": "<=",
                    "value2": 0.01
                  },
                  "passed": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 0,
                      "count": 1,
                      "ID": "#1%"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set Battle Track Progress",
                      "progress": 0,
                      "count": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (_CurrentHPRatio) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_CurrentHPRatio * 100))",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "WHOLE",
                          "_CurrentHPRatio"
                        ]
                      },
                      "ID": "#1%"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_EnterBattle",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-726340599\">Enemy_W4_Claymore_01_LocalLegend_ElationListener</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1358856185\">Enemy_W4_Claymore_01_LocalLegend_TargetSelectPrepare</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"357625087\">Monster_W4_Claymore_01_LocalLegend_Locking</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
          },
          "variableName": "_CheckAvatarNum",
          "livingTargets": true
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
          },
          "variableName": "_CheckPickNum",
          "livingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CheckPickNum",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (_CheckAvatarNum) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "(_CheckAvatarNum / 2)",
              "constants": [
                2
              ],
              "variables": [
                "_CheckAvatarNum"
              ]
            }
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
              },
              "searchRandom": true,
              "maxTargets": {
                "operator": "Variables[0] (CEIL) || Variables[1] (_CheckAvatarNum) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Variables[2] (_CheckPickNum) || SUB || RETURN",
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((_CheckAvatarNum / 2)) - _CheckPickNum)",
                "constants": [
                  2
                ],
                "variables": [
                  "CEIL",
                  "_CheckAvatarNum",
                  "_CheckPickNum"
                ]
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_Rally_HealUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
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
        "Trigger: Attack End"
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part01": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part01",
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
          "ability": "Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033022_BattleEvent_W4_Claymore_01_LocalLegend_Part01": {
      "fileName": "4033022_BattleEvent_W4_Claymore_01_LocalLegend_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_SelectTimes",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1358856185\">Enemy_W4_Claymore_01_LocalLegend_TargetSelectPrepare</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                },
                "value1": "_EnterBattle",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill03",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "SelectTarget"
                  },
                  "afterInjection": []
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SelectTimes",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Self}}"
              },
              "ability": "Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part01",
              "isTrigger": true
            }
          ]
        },
        "Wait for Pending Ability Completions",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4033022_BattleEvent_W4_Claymore_01_LocalLegend_EnterReady": {
      "fileName": "4033022_BattleEvent_W4_Claymore_01_LocalLegend_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Recover": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Recover",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
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
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (_HealHPRatio) || RETURN",
            "displayLines": "_HealHPRatio",
            "constants": [],
            "variables": [
              "_HealHPRatio"
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260100,
                "compareType": ">=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260106,
                "compareType": "<=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "_BattleTarget_LocalLegend_S4_2_Check",
              "context": "TargetEntity",
              "value": 1
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "_BattleTarget_LocalLegend_S4_3_Check",
              "context": "TargetEntity",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 426011,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "_BattleTarget_LocalLegend_S4_6_Check",
              "context": "TargetEntity",
              "value": 1
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "_BattleTarget_LocalLegend_S4_7_Check",
              "context": "TargetEntity",
              "value": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_MonsterChangeCnt",
          "context": "TargetEntity",
          "value": 1
        }
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Insert": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Insert",
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
          "silent": true
        },
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "silent": true
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "healPercent": 1,
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
          },
          "passed": [
            {
              "name": "Set Battle Track Progress",
              "progress": 0,
              "count": 100,
              "ID": "#1%"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1663989605\">Monster_W4_Claymore_LocalLegend03_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1919435705\">Monster_W4_Claymore_LocalLegend03_PartController_LockHP02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1121280189\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1767801569\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
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
          "set": 0
        }
      ],
      "references": []
    },
    "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-223570948\">W4_Claymore_01_LocalLegend_BattleScore1</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-23920605\">Enemy_W4_Claymore_01_LocalLegend_Status</a>"
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
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Add Battle Event",
          "teamName": "Neutral Team",
          "eventID": 20034,
          "variables": null,
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1977157728\">Enemy_W4_Claymore_01_LocalLegend_PickUpMessage</a>"
            },
            "Show BattleEvent Button"
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_DelayAddedRatio",
          "value": {
            "operator": "Variables[0] ({[PassiveSkill03[15]]}) || RETURN",
            "displayLines": "{[PassiveSkill03[15]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill03[15]]}"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 426011,
            "compareType": "=",
            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackDownRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealHPRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                "displayLines": "{[Skill02[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                "displayLines": "{[Skill02[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[1]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260100,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260101,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260120,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260121,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackDownRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[6]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[6]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[13]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[13]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[13]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealHPRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[14]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[14]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[14]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[12]]}) || RETURN",
                "displayLines": "{[Skill02[12]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[12]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[13]]}) || RETURN",
                "displayLines": "{[Skill02[13]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[13]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260102,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260122,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackDownRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[5]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[11]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[11]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[11]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealHPRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[12]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[12]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[12]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[10]]}) || RETURN",
                "displayLines": "{[Skill02[10]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[10]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[11]]}) || RETURN",
                "displayLines": "{[Skill02[11]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[11]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260103,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260123,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackDownRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[9]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[9]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[9]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealHPRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[10]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[10]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[10]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[8]]}) || RETURN",
                "displayLines": "{[Skill02[8]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[8]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[9]]}) || RETURN",
                "displayLines": "{[Skill02[9]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[9]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260104,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260124,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackDownRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[7]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[7]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[7]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealHPRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[8]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[8]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[8]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[6]]}) || RETURN",
                "displayLines": "{[Skill02[6]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[6]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[7]]}) || RETURN",
                "displayLines": "{[Skill02[7]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[7]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260105,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260125,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackDownRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[5]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealHPRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[6]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[6]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[6]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                "displayLines": "{[Skill02[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[5]]}) || RETURN",
                "displayLines": "{[Skill02[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[5]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260106,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260126,
                "compareType": "=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackDownRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[3]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_HealHPRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                "displayLines": "{[Skill02[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                "displayLines": "{[Skill02[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[3]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260120,
                "compareType": ">=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              },
              {
                "name": "Stage ID",
                "ID": 4260126,
                "compareType": "<=",
                "characterName": "Synergy Duo: Bloodbound Dark Duelist"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "InsertCheck",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1121280189\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonList_ADF_3) || RETURN",
                "displayLines": "SummonList_ADF_3",
                "constants": [],
                "variables": [
                  "SummonList_ADF_3"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        }
      ],
      "references": []
    },
    "4033022_Modifiers": {
      "fileName": "4033022_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-726340599\">Enemy_W4_Claymore_01_LocalLegend_ElationListener</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
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
            "_FirstProgressInfo",
            "_EnterBattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1804376736\">W4_Claymore_01_LocalLegend_BattleScoreMark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-223570948\">W4_Claymore_01_LocalLegend_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1804376736\">W4_Claymore_01_LocalLegend_BattleScoreMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "No Time to Die",
                          "desc": "Trigger the enemy boss's \"Fight in Unity\" once in combat against Synergy Duo on any difficulty",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1977157728\">Enemy_W4_Claymore_01_LocalLegend_PickUpMessage</a>",
          "execute": [
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": "<=",
                    "value2": 2,
                    "livingTargets": true
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1358856185\">Enemy_W4_Claymore_01_LocalLegend_TargetSelectPrepare</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "scope": "AITag",
                  "variableName": "_LocalLegend_PreSelectFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Selected Target}}"
                    },
                    "living": true,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team(Exclude Memosprites)}}"
                          },
                          {
                            "name": "Sort Sequence",
                            "TargetList": [
                              "Sort by AITag Params DamageCarry[Trimmed]",
                              {
                                "name": "Sort by Matching Weakness",
                                "matchFirst": true,
                                "defenders": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                }
                              }
                            ]
                          },
                          {
                            "name": "Target Index",
                            "indexType": "First"
                          }
                        ]
                      },
                      "scope": "AITag",
                      "variableName": "_LocalLegend_PreSelectFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Dark Praetor: Selected Target}}"
                        },
                        "value1": "DamageCarry",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "AITag"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Player Team(Exclude Memosprites)}}-{{EVENT[RoT] Dark Praetor: Selected Target}}"
                              },
                              {
                                "name": "Sort Sequence",
                                "TargetList": [
                                  "Sort by AITag Params DamageCarry[Trimmed]",
                                  {
                                    "name": "Sort by Matching Weakness",
                                    "matchFirst": true,
                                    "defenders": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    }
                                  }
                                ]
                              },
                              {
                                "name": "Target Index",
                                "indexType": "First"
                              }
                            ]
                          },
                          "scope": "AITag",
                          "variableName": "_LocalLegend_PreSelectFlag",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Player Team(Exclude Memosprites)}}-{{EVENT[RoT] Dark Praetor: Selected Target}}"
                              },
                              {
                                "name": "Sort Sequence",
                                "TargetList": [
                                  "Sort by AITag Params DamageCarry[Trimmed]",
                                  {
                                    "name": "Sort by Matching Weakness",
                                    "matchFirst": true,
                                    "defenders": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    }
                                  }
                                ]
                              },
                              {
                                "name": "Target Index",
                                "indexType": "First"
                              }
                            ]
                          },
                          "scope": "AITag",
                          "variableName": "_LocalLegend_PreSelectFlag",
                          "value": 1
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
            "_SelectTimes"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
                }
              ],
              "priorityLevel": -11
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                  "blockTeams": "Player Team",
                  "entityType": "All"
                },
                {
                  "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                  "blockTeams": "Neutral Team",
                  "entityType": "All"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_FirstProgressInfo",
            "_EnterBattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                }
              ],
              "priorityLevel": -11
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                  "blockTeams": "Player Team",
                  "entityType": "All"
                },
                {
                  "name": "Mark Entity as Non-Target(Unselectable) [CUSTOM]",
                  "blockTeams": "Neutral Team",
                  "entityType": "All"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_FirstProgressInfo",
            "_EnterBattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1733208615\">Enemy_W4_Claymore_01_LocalLegend_WhiteSummon</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": 30
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1813832219\">Enemy_W4_Claymore_01_LocalLegend_BlackSummon</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": 30
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (_DamageAddedRatio) || RETURN",
                    "displayLines": "_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "_DamageAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue2",
                  "value": {
                    "operator": "Variables[0] (_DamageReduceRatio) || RETURN",
                    "displayLines": "_DamageReduceRatio",
                    "constants": [],
                    "variables": [
                      "_DamageReduceRatio"
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
                    "operator": "Variables[0] (_DamageAddedRatio) || RETURN",
                    "displayLines": "_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "_DamageAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_DamageReduceRatio) || RETURN",
                    "displayLines": "_DamageReduceRatio",
                    "constants": [],
                    "variables": [
                      "_DamageReduceRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_EnterBattle",
            "InsertCheck04",
            "_BossUI"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span> and DMG received reduces by <span class=\"descriptionNumberColor\">MDF_ShowValue2</span>.",
          "type": "Other",
          "statusName": "Fight in Unity"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>",
          "stackData": [],
          "latentQueue": [
            "_EnterBattle",
            "InsertCheck04",
            "_BossUI"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]",
          "description": "This target can only attack the \"Titankin\" and can only be attacked by the \"Titankin.\"",
          "type": "Other",
          "statusName": "Fury Duel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]",
          "description": "This target can only attack the \"Titankin\" and can only be attacked by the \"Titankin.\"",
          "type": "Other",
          "statusName": "Fury Duel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]",
          "description": "This target can only attack \"Black Tide Creature\" and can only be attacked by \"Black Tide Creature.\"",
          "type": "Other",
          "statusName": "Black Tide Duel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]",
          "description": "This target can only attack \"Black Tide Creature\" and can only be attacked by \"Black Tide Creature.\"",
          "type": "Other",
          "statusName": "Black Tide Duel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Field Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Toggle Field Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]: Start[?]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
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
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Light Praetor: 3}}"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "RuanMei_TriggerImprintEffect",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_FirstProgressInfo",
            "_EnterBattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Field Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Toggle Field Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]: Start[?]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
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
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Light Praetor: 3}}"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "RuanMei_TriggerImprintEffect",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_FirstProgressInfo",
            "_EnterBattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add to Team Target Grouping",
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
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1806977974\">Enemy_W4_Claymore_01_LocalLegend_Fatigue</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "MDF_ShowValue1"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When this target deals DMG to enemy targets, the DMG received by enemy targets is reduced by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. This state is removed when the \"Corrosion\" state is removed.",
          "type": "Other",
          "effectName": "DMG Reduction",
          "statusName": "DMG Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-23920605\">Enemy_W4_Claymore_01_LocalLegend_Status</a>",
          "modifierFlags": [
            "STAT_AITargetHigherPriority"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage ID",
                    "ID": 426011,
                    "compareType": "=",
                    "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-883767978\">Monster_W4_Claymore_01_LocalLegend_DamageAdd</a>",
                      "valuePerStack": {
                        "MDF_DamageAdded": {
                          "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[5]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
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
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1542972511\">W4_Claymore_01_ListenTogether</a>"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Enemy"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>",
                          "casterAssign": "TargetSelf"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
                      },
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
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
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
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": "<=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability021_Part01",
                      "priorityTag": "PROG_MonsterLowest",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability02_Part01",
                      "priorityTag": "PROG_MonsterLowest",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EnterBattle",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team(Exclude Memosprites)}}"
                        },
                        "compareType": ">",
                        "value2": 2,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "skillType": "ControlSkill03",
                          "target": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "SelectTarget"
                          },
                          "afterInjection": [],
                          "priorityTag": "Summon_Activity"
                        }
                      ]
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "skillType": "ControlSkill03",
                      "target": {
                        "name": "Add Target by Unique Identifier",
                        "identifier": "SelectTarget"
                      },
                      "afterInjection": [],
                      "priorityTag": "Summon_Activity"
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                      },
                      "variableName": "_CurrentHPRatio"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": 0,
                          "count": 0,
                          "ID": "#1%"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_CurrentHPRatio",
                            "compareType": "<=",
                            "value2": 0.01
                          },
                          "passed": [
                            {
                              "name": "Set Battle Track Progress",
                              "progress": 0,
                              "count": 1,
                              "ID": "#1%"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Set Battle Track Progress",
                              "progress": 0,
                              "count": {
                                "operator": "Variables[0] (WHOLE) || Variables[1] (_CurrentHPRatio) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || RETURN",
                                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_CurrentHPRatio * 100))",
                                "constants": [
                                  100
                                ],
                                "variables": [
                                  "WHOLE",
                                  "_CurrentHPRatio"
                                ]
                              },
                              "ID": "#1%"
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
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Light Praetor: 3}}"
                      },
                      "variableName": "_CurrentHPRatio"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Light Praetor: 3}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                      },
                      "passed": [
                        {
                          "name": "Set Battle Track Progress",
                          "progress": 0,
                          "count": 0,
                          "ID": "#1%"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_CurrentHPRatio",
                            "compareType": "<=",
                            "value2": 0.01
                          },
                          "passed": [
                            {
                              "name": "Set Battle Track Progress",
                              "progress": 0,
                              "count": 1,
                              "ID": "#1%"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Set Battle Track Progress",
                              "progress": 0,
                              "count": {
                                "operator": "Variables[0] (WHOLE) || Variables[1] (_CurrentHPRatio) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || RETURN",
                                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_CurrentHPRatio * 100))",
                                "constants": [
                                  100
                                ],
                                "variables": [
                                  "WHOLE",
                                  "_CurrentHPRatio"
                                ]
                              },
                              "ID": "#1%"
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
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1806977974\">Enemy_W4_Claymore_01_LocalLegend_Fatigue</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]",
                      "valuePerStack": {
                        "MDF_ShowValue1": {
                          "operator": "Variables[0] (_AttackDownRatio) || RETURN",
                          "displayLines": "_AttackDownRatio",
                          "constants": [],
                          "variables": [
                            "_AttackDownRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1806977974\">Enemy_W4_Claymore_01_LocalLegend_Fatigue</a>[<span class=\"descriptionNumberColor\">DMG Reduction</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getCreator]]"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getCreator]]"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getCreator]]"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getCreator]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getCreator]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1216174202\">Enemy_W4_Claymore_01_LocalLegend_AllCurse</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: Begin [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1542972511\">W4_Claymore_01_ListenTogether</a>"
                }
              ]
            },
            {
              "eventTrigger": "Departed State: End [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1495116910\">W4_Claymore_01_ListenDouble</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
          "modifierFlags": [
            "DisableAction"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Recover",
                  "priorityTag": "MonsterBuffSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1.0011718e-7
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase3"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase0"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase3"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Restores a certain amount of HP and returns to battle during the next action.",
          "type": "Other",
          "statusName": "Indomitable Battle",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1767801569\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP02</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
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
                        "value1": "InsertCheck02",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Light Praetor: 3}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "_DelayRatio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Light Praetor: 3}}"
                      },
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
                      }
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1121280189\">Monster_W4_Claymore_01_LocalLegend_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
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
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Light Praetor: 3}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Stage ID",
                            "ID": 4260100,
                            "compareType": ">=",
                            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260106,
                            "compareType": "<=",
                            "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BattleTarget_LocalLegend_S4_1_Check",
                          "value": 1
                        }
                      ]
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Light Praetor: 3}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
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
                      "name": "Set Enemy Phase",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "mode": "Inc"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Light Praetor: 3}}"
                      },
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Claymore_01_LocalLegend_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "_DelayRatio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Light Praetor: 3}}"
                      },
                      "variableName": "_DelayRatio",
                      "value": {
                        "operator": "Variables[0] (_DelayRatio) || Variables[1] (_DelayAddedRatio) || ADD || RETURN",
                        "displayLines": "(_DelayRatio + _DelayAddedRatio)",
                        "constants": [],
                        "variables": [
                          "_DelayRatio",
                          "_DelayAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Light Praetor: 3}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260120,
                        "compareType": ">=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260126,
                        "compareType": "<=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
                      }
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-883767978\">Monster_W4_Claymore_01_LocalLegend_DamageAdd</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1777684731\">Standard_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_DamageAdded) || MUL || RETURN",
                      "displayLines": "(MDF_Layer * MDF_DamageAdded)",
                      "constants": [],
                      "variables": [
                        "MDF_Layer",
                        "MDF_DamageAdded"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAdded"
          ],
          "latentQueue": [],
          "addStacksPerTrigger": 1
        }
      ],
      "references": []
    },
    "4033022_Functions": {
      "fileName": "4033022_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 4,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1542972511\">W4_Claymore_01_ListenTogether</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
                        },
                        "compareType": "=",
                        "value2": 0,
                        "livingTargets": true
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
                        },
                        "compareType": "=",
                        "value2": 0,
                        "livingTargets": true
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "InsertCheck03",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertCheck03",
                  "value": 0
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability021_Part01",
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
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1495116910\">W4_Claymore_01_ListenDouble</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": ">=",
                    "value2": 2,
                    "livingTargets": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1386282109\">Enemy_W4_Claymore_01_LocalLegend_AllMonst</a>[<span class=\"descriptionNumberColor\">Fight in Unity</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "InsertCheck04",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertCheck04",
                  "value": 0
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Claymore_01_LocalLegend_Ability02_Part01",
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
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1083830155\">W4_Claymore_01_LocalLegend_WhiteMonst</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "value1": "_BossUI",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "display": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "value1": "_BossUI",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: 3}}"
                  },
                  "display": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "variableName": "_BossUI",
                  "value": 1
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Summons}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1927449491\">W4_Claymore_01_LocalLegend_BlackMonst</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Light Praetor: 3}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "value1": "_BossUI",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Light Praetor: 3}}"
                  },
                  "display": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                    },
                    "value1": "_BossUI",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "display": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Dark Praetor: Self}}"
                  },
                  "variableName": "_BossUI",
                  "value": 0
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1541340590\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1370763817\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active</a>[<span class=\"descriptionNumberColor\">Black Tide Duel</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2121379300\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"553563923\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active</a>[<span class=\"descriptionNumberColor\">Fury Duel</span>]"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Summons}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Light Praetor: Light Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Dark Targets}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Dark Praetor: Dark Summons}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1934316288\">Enemy_W4_Claymore_01_LocalLegend_Stealth</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "4033022_BE_BattleEvents": {
      "fileName": "4033022_BE_BattleEvents",
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
          "ID": 20034,
          "team": "Neutral Team",
          "eventType": "Entity Selection",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Select ally characters to face \"Synergy Duo: Bloodbound Dark Duelist,\" while the unselected characters will face \"Synergy Duo: Ironclad White Guard.\""
        }
      ],
      "references": []
    }
  }
}