const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60030,
  "trimCharacterName": 60030,
  "abilityList": [
    "60030_MissionBattleEvent60030_AbilityP01",
    "60030_MissionBattleEvent60030_Ability03_Part02",
    "60030_MissionBattleEvent60030_Ability03_Part01",
    "60030_MissionBattleEvent60030_Ability03_EnterReady"
  ],
  "abilityObject": {
    "60030_MissionBattleEvent60030_AbilityP01": {
      "fileName": "60030_MissionBattleEvent60030_AbilityP01",
      "childAbilityList": [
        "60030_MissionBattleEvent60030_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"394957188\">MissionBattleEvent60030_AbilityP01</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__394957188\">MissionBattleEvent60030_AbilityP01</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": -1
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 1,
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
            },
            {
              "eventTrigger": "Enter View-Mode [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#CL_ViewMode",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60030_MissionBattleEvent60030_Ability03_Part02": {
      "fileName": "60030_MissionBattleEvent60030_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ViewMode",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_FirstBE",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}} + {{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1254643304\">Enemy_W4_IronTombCore_Main_P1_DamageReduceRatio</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Irontomb: Part 1}}"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Irontomb: Part 2}}"
            }
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            }
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(-{[Skill03[1]]} * 100)",
            "constants": [
              100
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "max": 100
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_FirstBE",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "healPercent": 1,
              "formula": "Heal from Target MaxHP"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_FirstBE",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_MaxHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[0]]}) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Ultimate"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[0]]}) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Ultimate"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[0]]}) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Ultimate"
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
                "DamageType": "Ice",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[2]]}) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Ultimate"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[2]]}) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Ultimate"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_MaxHp * {[Skill03[2]]}) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_MaxHp",
                    "{[Skill03[2]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Ultimate"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "60030_MissionBattleEvent60030_Ability03_Part01": {
      "fileName": "60030_MissionBattleEvent60030_Ability03_Part01",
      "childAbilityList": [
        "60030_MissionBattleEvent60030_Ability03_EnterReady",
        "60030_MissionBattleEvent60030_Ability03_Part01",
        "60030_MissionBattleEvent60030_Ability03_Part02",
        "60030_MissionBattleEvent60030_Ability03_Camera",
        "60030_MissionBattleEvent60030_Ability03Ready_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        40,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60030_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "60030_MissionBattleEvent60030_Ability03_EnterReady": {
      "fileName": "60030_MissionBattleEvent60030_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ViewMode",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_StoryMode",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "#CL_First",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Animation Logic",
                "logicName": "SkillReady"
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_First",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Animation Logic",
            "logicName": "SkillReady"
          },
          "passed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6003001,
      "trigger": "Skill03",
      "name": "Heroes, Ever Ablaze",
      "type": "Single Target",
      "slot": "Ultimate",
      "desc": "Ally targets using Ultimate can regenerate 1 Energy, deal massive Ice DMG to one enemy, and greatly reduce \"Amphorean Hatred\"!",
      "energyCost": 4,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.07,
          0.3,
          0.6
        ]
      },
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60030_Skill03_EnterReady",
        "Avatar_MissionBattleEvent60030_Skill03_Phase01",
        "Avatar_MissionBattleEvent60030_Skill03_Phase02",
        "Avatar_MissionBattleEvent60030_Skill03_Camera",
        "Avatar_MissionBattleEvent60030_Skill03Ready_Camera"
      ],
      "toughnessList": [
        0,
        120,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6003002,
      "trigger": "SkillP01",
      "name": null,
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60030_SkillP01"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}