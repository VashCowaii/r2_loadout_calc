const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2033011,
  "trimCharacterName": 2033011,
  "abilityList": [
    "2033011_Monster_W2_LycanMecha_AbilityP01",
    "2033011_Monster_W2_LycanMecha_Ability05_Part02",
    "2033011_Monster_W2_LycanMecha_Ability05_Part01",
    "2033011_Monster_W2_LycanMecha_Ability04_Part02",
    "2033011_Monster_W2_LycanMecha_Ability04_Part01",
    "2033011_Monster_W2_LycanMecha_Ability06_Part02",
    "2033011_Monster_W2_LycanMecha_Ability06_Part01",
    "2033011_Monster_W2_LycanMecha_Ability03_Part02",
    "2033011_Monster_W2_LycanMecha_Ability03_Part01",
    "2033011_Monster_W2_LycanMecha_Ability02_Part02",
    "2033011_Monster_W2_LycanMecha_Ability02_Part01",
    "2033011_Monster_W2_LycanMecha_Ability01_Part02",
    "2033011_Monster_W2_LycanMecha_Ability01_Part01",
    "2033011_Monster_W2_LycanMecha_MainStoryInitiate",
    "2033011_Modifiers",
    "2033011_BE_BattleEvents"
  ],
  "abilityObject": {
    "2033011_Monster_W2_LycanMecha_AbilityP01": {
      "fileName": "2033011_Monster_W2_LycanMecha_AbilityP01",
      "childAbilityList": [
        "2033011_Monster_W2_LycanMecha_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1104499944\">W2_LycanMecha_BattleScore2</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
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
          "name": "Define Custom Variable",
          "variableName": "Wolf_MaxAttackCount",
          "value": {
            "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
            "displayLines": "{[SkillP01[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"824686737\">Enemy_W2_LycanMecha_RageListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1905621078\">Enemy_W2_Lycan_RageControllerV2</a>",
          "valuePerStack": {
            "MaxAttackCount": {
              "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
              "displayLines": "Wolf_MaxAttackCount",
              "constants": [],
              "variables": [
                "Wolf_MaxAttackCount"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1246058342\">Enemy_W2_LycanMecha_BattleCry</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__443800495\">Enemy_W2_LycanMecha_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase_Flag",
                  "value": 1
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 2033011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Howling Casket (Bug)",
                    "isBaseCompare": true,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Phase_Flag",
                  "value": 2
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 4
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>. Can use Lupitoxin Synthesis and Slaughter Algorithm. This is dispelled when Weakness is broken.",
          "type": "Buff",
          "effectName": "Moon Rage",
          "statusName": "Moon Rage"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__824686737\">Enemy_W2_LycanMecha_RageListener</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"443800495\">Enemy_W2_LycanMecha_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
                          "operator": "Variables[0] ({[SkillRage[0]]}) || RETURN",
                          "displayLines": "{[SkillRage[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillRage[0]]}"
                          ]
                        }
                      }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"443800495\">Enemy_W2_LycanMecha_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        }
      ]
    },
    "2033011_Monster_W2_LycanMecha_Ability05_Part02": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{ST and Blast}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 2
          }
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "HitSplit": 0.25,
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
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                "invertCondition": true
              }
            ]
          },
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
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
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]"
              }
            ]
          },
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "HitSplit": 0.25,
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
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "HitSplit": 0.25,
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
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                "invertCondition": true
              }
            ]
          },
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
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
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]"
              }
            ]
          },
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "HitSplit": 0.25,
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
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "HitSplit": 0.5,
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
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                "invertCondition": true
              }
            ]
          },
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
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
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]"
              }
            ]
          },
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
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "HitSplit": 0.5,
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
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability05_Part01": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability05_Part01",
      "childAbilityList": [
        "2033011_Monster_W2_LycanMecha_Ability05_Camera",
        "2033011_Monster_W2_LycanMecha_Ability05_Part01",
        "2033011_Monster_W2_LycanMecha_Ability05_Part02"
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
          "ability": "Monster_W2_LycanMecha_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability04_Part02": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
              "displayLines": "{[Skill04[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04[3]]}"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "valuePerStack": {
                "MDF_LoseSP": {
                  "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                  "displayLines": "{[Skill04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[1]]}"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability04_Part01": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability04_Part01",
      "childAbilityList": [
        "2033011_Monster_W2_LycanMecha_Ability04_Camera",
        "2033011_Monster_W2_LycanMecha_Ability04_Part01",
        "2033011_Monster_W2_LycanMecha_Ability04_Part02"
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
          "ability": "Monster_W2_LycanMecha_Ability04_Part02",
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
    "2033011_Monster_W2_LycanMecha_Ability06_Part02": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Borisin Instinct"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__167"
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Wolf_MaxAttackCount",
          "value": {
            "operator": "Variables[0] ({[SkillP01[1]]}) || INVERT || RETURN",
            "displayLines": "-{[SkillP01[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[1]]}"
            ]
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
            "value1": "Wolf_AttackCount",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
              "displayLines": "Wolf_MaxAttackCount",
              "constants": [],
              "variables": [
                "Wolf_MaxAttackCount"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Wolf_AttackCount",
              "value": {
                "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                "displayLines": "Wolf_MaxAttackCount",
                "constants": [],
                "variables": [
                  "Wolf_MaxAttackCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variable": "Wolf_MaxAttackCount",
              "target2": null,
              "variable2": "Wolf_MaxAttackCount"
            },
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variable": "Wolf_AttackCount",
              "target2": null,
              "variable2": "Wolf_AttackCount"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__167"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Wolf_MaxAttackCount",
                  "value": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Wolf_AttackCount",
                  "value": {
                    "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                    "displayLines": "Wolf_AttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_AttackCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                    "displayLines": "Wolf_AttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_AttackCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"74215986\">Enemy_W2_LycanMecha_Ability06_Impact</a>[<span class=\"descriptionNumberColor\">Blood Fervor</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "Wolf_AttackCount",
              "value": 0
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 4
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W2_LycanKing_Ability07_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "MaxWolfRank": 4
                  },
                  "allowAbilityTriggers": false
                }
              ],
              "noTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__167"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W2_LycanMecha_Ability03_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "MaxWolfRank": 3
                      },
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__167"
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break",
                                "invertCondition": true
                              }
                            ]
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W2_LycanMecha_Ability03_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterChangeState",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "MaxWolfRank": 3
                          },
                          "allowAbilityTriggers": false
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__167"
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "BattleEventAbility_Monster_Lycan_RageStart",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "MonsterChangeState",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "MaxWolfRank": 2
                              },
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Check Boolean Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value": "ENEMIES_OBJECT_UNUSED__167"
                                  },
                                  {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "compareType": "=",
                                    "value2": 2
                                  }
                                ]
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "abilityName": "BattleEventAbility_Monster_Lycan_RageStart",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Level Entity}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "priorityTag": "MonsterChangeState",
                                  "canHitNonTargets": true,
                                  "valuePerStack": {
                                    "MaxWolfRank": 2
                                  },
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
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variable": "Wolf_MaxAttackCount",
              "target2": null,
              "variable2": "Wolf_MaxAttackCount"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__167"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Wolf_MaxAttackCount",
                  "value": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                    "displayLines": "Wolf_AttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_AttackCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                    "displayLines": "Wolf_MaxAttackCount",
                    "constants": [],
                    "variables": [
                      "Wolf_MaxAttackCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"74215986\">Enemy_W2_LycanMecha_Ability06_Impact</a>[<span class=\"descriptionNumberColor\">Blood Fervor</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability06_Part01": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability06_Part01",
      "childAbilityList": [
        "2033011_Monster_W2_LycanMecha_Ability06_Camera",
        "2033011_Monster_W2_LycanMecha_Ability06_Part01",
        "2033011_Monster_W2_LycanMecha_Ability06_Part02"
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
          "ability": "Monster_W2_LycanMecha_Ability06_Part02",
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
    "2033011_Monster_W2_LycanMecha_Ability03_Part02": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W2_Lycan"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1346076887\">Enemy_W2_Lycan_RageStartMark</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability03_Part01": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability03_Part01",
      "childAbilityList": [
        "2033011_Monster_W2_LycanMecha_Ability03_Camera",
        "2033011_Monster_W2_LycanMecha_Ability03_Part01",
        "2033011_Monster_W2_LycanMecha_Ability03_Part02"
      ],
      "skillTrigger": "SkillRage",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W2_LycanMecha_Ability03_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1346076887\">Enemy_W2_Lycan_RageStartMark</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
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
                "value": "ENEMIES_OBJECT_UNUSED__167"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1346076887\">Enemy_W2_Lycan_RageStartMark</a>",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1726527858\">Enemy_W2_Lycan_RageEffectMark</a>",
              "casterAssign": "TargetSelf"
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__167"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                "displayLines": "Wolf_AttackCount",
                "constants": [],
                "variables": [
                  "Wolf_AttackCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "maximum": {
                "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                "displayLines": "Wolf_MaxAttackCount",
                "constants": [],
                "variables": [
                  "Wolf_MaxAttackCount"
                ]
              },
              "assignState": "True",
              "state": "Active"
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__167"
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
              "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1414738413\">Enemy_W2_Lycan_RagePhase1Mark</a>[<span class=\"descriptionNumberColor\">Bloodlust</span>]"
            }
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20011,
          "variables": null
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
          "casterAssign": "TargetSelf"
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
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__167"
              },
              {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "=",
                "value2": 4
              }
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1346076887\">Enemy_W2_Lycan_RageStartMark</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1736159544\">Enemy_W2_Lycan_RageStatus</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2033011_Monster_W2_LycanMecha_Ability02_Part02": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
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
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Target Left of Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
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
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Target Right of Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
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
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 2033011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Howling Casket (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_LoseSP": {
                      "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                      "displayLines": "{[Skill04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[1]]}"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability02_Part01": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability02_Part01",
      "childAbilityList": [
        "2033011_Monster_W2_LycanMecha_Ability02_Camera",
        "2033011_Monster_W2_LycanMecha_Ability02_Part01",
        "2033011_Monster_W2_LycanMecha_Ability02_Part02"
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
          "ability": "Monster_W2_LycanMecha_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability01_Part02": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability01_Part02",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 2033011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Howling Casket (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_LoseSP": {
                      "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                      "displayLines": "{[Skill04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[1]]}"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_Ability01_Part01": {
      "fileName": "2033011_Monster_W2_LycanMecha_Ability01_Part01",
      "childAbilityList": [
        "2033011_Monster_W2_LycanMecha_Ability01_Camera",
        "2033011_Monster_W2_LycanMecha_Ability01_Part01",
        "2033011_Monster_W2_LycanMecha_Ability01_Part02"
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
          "ability": "Monster_W2_LycanMecha_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "2033011_Monster_W2_LycanMecha_MainStoryInitiate": {
      "fileName": "2033011_Monster_W2_LycanMecha_MainStoryInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"2016689086\">Enemy_W2_LycanMecha_MainStory</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2016689086\">Enemy_W2_LycanMecha_MainStory</a>",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2033011_Modifiers": {
      "fileName": "2033011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1104499944\">W2_LycanMecha_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Frankenstein's Dog",
                          "desc": "Howling Casket knocks down an allied character that is afflicted with Terrified",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1154832801\">W2_LycanMecha_BattleScore1</a>",
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
                  "variableName": "LycanMecha_AddFearPreSuc"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "LycanMecha_FearPreNum"
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
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "LycanMecha_AddFearPreSuc",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "LycanMecha_FearPreNum",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Ain't Nothing to Fear",
                          "desc": "In a single battle, dispel all the \"Terror Grip\" states inflicted by Howling Casket on your team's characters",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL",
            "AvatarBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Count",
                      "value": -1,
                      "min": 1,
                      "max": 2
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Unable to move until the start of this unit's next turn.",
          "type": "Debuff",
          "effectName": "Becomes Terrified",
          "statusName": "Terrified"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-743573476\">Standard_FearListener</a>",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "casterFilter": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                  "execute": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
                      "variable": "MDF_Count",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_Count"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1708564836\">Standard_Fear</a>[<span class=\"descriptionNumberColor\">Terrified</span>]",
                          "valuePerStack": {
                            "MDF_LoseSP": {
                              "operator": "Variables[0] (MDF_LoseSP) || RETURN",
                              "displayLines": "MDF_LoseSP",
                              "constants": [],
                              "variables": [
                                "MDF_LoseSP"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Count",
                  "value": -1
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_AddByLycanMecha",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>",
                          "adjustmentType": "+",
                          "variableName": "LycanMecha_FearPreNum",
                          "value": -1
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1138048251\">Standard_FearPre</a>[<span class=\"descriptionNumberColor\">Terror Grip</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "MonsterType_W2_Lycan"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>",
                      "variableName": "LycanMecha_AddFearPreSuc",
                      "value": 1
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1154832801\">W2_LycanMecha_BattleScore1</a>",
                      "adjustmentType": "+",
                      "variableName": "LycanMecha_FearPreNum",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AddByLycanMecha",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-743573476\">Standard_FearListener</a>",
                  "valuePerStack": {
                    "MDF_LoseSP": {
                      "operator": "Variables[0] (MDF_LoseSP) || RETURN",
                      "displayLines": "MDF_LoseSP",
                      "constants": [],
                      "variables": [
                        "MDF_LoseSP"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LoseSP"
          ],
          "latentQueue": [],
          "description": "Enters the \"Terrified\" state at the start of the second turn. Attacking the %CasterName 1 time before then can dispel \"Terror Grip.\"",
          "type": "Debuff",
          "effectName": "Terror Grip",
          "statusName": "Terror Grip",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-434202587\">Enemy_W2_LycanMecha_Ability04_FearResistance</a>",
          "modifierFlags": [
            "ImmuneDebuff"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__74215986\">Enemy_W2_LycanMecha_Ability06_Impact</a>[<span class=\"descriptionNumberColor\">Blood Fervor</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "The Bloodlust stacks needed to enter the Moon Rage status are reduced.",
          "type": "Buff",
          "effectName": "Bloodlust limit reduced",
          "statusName": "Blood Fervor"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1246058342\">Enemy_W2_LycanMecha_BattleCry</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_LycanMecha_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBattleCry",
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
              "priorityLevel": -45
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-645995038\">Enemy_W2_LycanMecha_BattleCryTag</a>",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1905621078\">Enemy_W2_Lycan_RageControllerV2</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        }
      ],
      "references": []
    },
    "2033011_BE_BattleEvents": {
      "fileName": "2033011_BE_BattleEvents",
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
          "ID": 20011,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_Lycan_Rage"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "eventSpeed": 60,
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}