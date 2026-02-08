const compositeAbilityObject = {
  "fullCharacterName": 2022010,
  "trimCharacterName": 2022010,
  "abilityList": [
    "2022010_Monster_W2_Abomi01_Ability02_Part02",
    "2022010_Monster_W2_Abomi01_Ability02_Part01",
    "2022010_Monster_W2_Abomi01_Ability01_Part02",
    "2022010_Monster_W2_Abomi01_Ability01_Part01",
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00",
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
    "2022010_Monster_W2_Abomi01_Passive01",
    "2022010_Modifiers"
  ],
  "abilityObject": {
    "2022010_Monster_W2_Abomi01_Ability02_Part02": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
            "displayLines": "{[Skill01[4]]}",
            "constants": [],
            "variables": [
              "{[Skill01[4]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022010_Monster_W2_Abomi01_Ability02_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability02_Part01",
      "childAbilityList": [
        "2022010_Monster_W2_Abomi01_Ability02_Camera",
        "2022010_Monster_W2_Abomi01_Ability02_Part01",
        "2022010_Monster_W2_Abomi01_Ability02_Part02"
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
          "ability": "Monster_W2_Abomi01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022010_Monster_W2_Abomi01_Ability01_Part02": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
            "displayLines": "{[Skill01[4]]}",
            "constants": [],
            "variables": [
              "{[Skill01[4]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022010_Monster_W2_Abomi01_Ability01_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_Ability01_Part01",
      "childAbilityList": [
        "2022010_Monster_W2_Abomi01_Ability01_Camera",
        "2022010_Monster_W2_Abomi01_Ability01_Part01",
        "2022010_Monster_W2_Abomi01_Ability01_Part02"
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
          "ability": "Monster_W2_Abomi01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W2_Abomi01_00_HitFlyFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "SkillP01",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                          "valuePerStack": {
                            "MDF_SpeedRatio": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Monster_W2_Abomi01_00_ReviveEff"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[0]]}"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "SkillP04",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Exit Broken-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 202201010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Mara-Struck Soldier"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Monster_W2_Abomi01_00_ReviveEff"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                          "valuePerStack": {
                            "MDF_SpeedRatio": {
                              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                              "displayLines": "{[PassiveSkill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill01[2]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MaxHPValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[0]]}"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Reset Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
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
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00": {
      "fileName": "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
          "priorityTag": "MonsterReviveSelf",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ],
      "references": []
    },
    "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01": {
      "fileName": "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
        }
      ],
      "references": []
    },
    "2022010_Monster_W2_Abomi01_Passive01": {
      "fileName": "2022010_Monster_W2_Abomi01_Passive01",
      "childAbilityList": [
        "2022010_Monster_W2_Abomi01_Passive01",
        "2022010_Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
        "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part00",
        "2022010_Monster_W2_Abomi01_PassiveAbility_Insert02_Part01"
      ],
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2059655878\">Monster_W2_Abomi01_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"686723873\">Monster_W2_Abomi01_HitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1592917856\">Monster_W2_Abomi01_Sushang</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1968583742\">Monster_W2_Abomi01_DanHeng</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1913097491\">Monster_W2_Abomi01_Standard_Servant</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-508592004\">Monster_W2_Abomi01_IsHit</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__686723873\">Monster_W2_Abomi01_HitFly</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag",
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
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2059655878\">Monster_W2_Abomi01_Break</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_W2_Abomi01_00_BreakFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_W2_Abomi01_00_BreakFlag"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1539118036\">Monster_W2_Abomi01_BattleRage</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Abomi01_PassiveAbility_Insert_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1968583742\">Monster_W2_Abomi01_DanHeng</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1002,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Dan Heng"
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
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
                    "value2": 0.4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1865884989\">Monster_W2_Abomi01_DanHeng_Hide</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1592917856\">Monster_W2_Abomi01_Sushang</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Sushang"
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
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
                    "value2": 0.5
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1913097491\">Monster_W2_Abomi01_Standard_Servant</a>",
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-508592004\">Monster_W2_Abomi01_IsHit</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1907438637\">Monster_W2_Abomi01_BeingHit</a>"
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2022010_Modifiers": {
      "fileName": "2022010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__345912758\">Monster_W2_Abomi01_Accelerate</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedRatio) || RETURN",
                    "displayLines": "MDF_SpeedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedRatio"
          ],
          "latentQueue": [
            "Monster_W2_Abomi01_00_HitFlyFlag",
            "Monster_W2_Abomi01_00_ReviveEff"
          ],
          "description": "SPD Increased.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-870035928\">Monster_W2_Abomi01_LockHP</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1533376830\">Monster_W2_Abomi01_Revive</a>[<span class=\"descriptionNumberColor\">Rebirth</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W2_Abomi01_00_ReviveEff",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag",
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
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
                    }
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
                        "value1": "Monster_W2_Abomi01_00_ReviveTimes",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Abomi01_PassiveAbility_Insert02_Part01",
                          "priorityTag": "MonsterReviveSelf",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 202201010,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Mara-Struck Soldier"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 202201010,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Mara-Struck Soldier"
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "Monster_W2_Abomi01_00_ReviveTimes"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -50
            },
            {
              "eventTrigger": "Fatal Damage [Owner]: Start",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Entity is Flying"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag",
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
                      "variableName": "Monster_W2_Abomi01_00_HitFlyFlag"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Upon receiving a killing blow, restores a certain amount of HP.",
          "type": "Buff",
          "effectName": "Rebirth",
          "statusName": "Rebirth"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1865884989\">Monster_W2_Abomi01_DanHeng_Hide</a>",
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1907438637\">Monster_W2_Abomi01_BeingHit</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}