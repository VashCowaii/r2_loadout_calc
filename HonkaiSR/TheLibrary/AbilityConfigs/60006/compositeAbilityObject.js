const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60006,
  "trimCharacterName": 60006,
  "abilityList": [
    "60006_MissionBattleEvent60006_PassiveAbility01",
    "60006_MissionBattleEvent60006_Ability03_Part02_HuanLongTrigger",
    "60006_MissionBattleEvent60006_Ability03_Part01_HuanLongTrigger",
    "60006_MissionBattleEvent60006_Ability03_Part02",
    "60006_MissionBattleEvent60006_Ability03_Part01"
  ],
  "abilityObject": {
    "60006_MissionBattleEvent60006_PassiveAbility01": {
      "fileName": "60006_MissionBattleEvent60006_PassiveAbility01",
      "childAbilityList": [
        "60006_MissionBattleEvent60006_PassiveAbility01"
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
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-181226190\">MissionBattleEvent60006_PassiveAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1018498779\">MissionBattleEvent60006_Charge</a>",
          "valuePerStack": {
            "MDF_SPValue": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
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
          "modifier": "<a class=\"gModGreen\" id=\"142388248\">MissionBattleEvent60006_AutoUseUltraAbility</a>"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
            "displayLines": "#BattleEvent_P3_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P3_ADF"
            ]
          },
          "isFixed": "(Fixed)"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__142388248\">MissionBattleEvent60006_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1018498779\">MissionBattleEvent60006_Charge</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Current Action Holder's Team",
                            "team": "Player Team"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Skill Type",
                              "skillType": "Ultimate"
                            }
                          }
                        ]
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
                      "value": {
                        "operator": "Variables[0] (MDF_SPValue) || RETURN",
                        "displayLines": "MDF_SPValue",
                        "constants": [],
                        "variables": [
                          "MDF_SPValue"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SPValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-181226190\">MissionBattleEvent60006_PassiveAbility</a>",
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 5,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 8015020,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Phantylia the Undying"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MissionOrWeekly",
                      "value": 1
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
    "60006_MissionBattleEvent60006_Ability03_Part02_HuanLongTrigger": {
      "fileName": "60006_MissionBattleEvent60006_Ability03_Part02_HuanLongTrigger",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 200,
          "isFixed": "* ERR"
        },
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P1_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P1_ADF"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P2_ADF"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "Tags": null,
                "attackType": "Ultimate"
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
              "displayLines": "#BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60006_MissionBattleEvent60006_Ability03_Part01_HuanLongTrigger": {
      "fileName": "60006_MissionBattleEvent60006_Ability03_Part01_HuanLongTrigger",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "MissionBattleEvent60006_Ability03_Part02_HuanLongTrigger",
          "isTrigger": true
        },
        {
          "name": "UI Display Event",
          "popUpText": "Cloudhymn Roar"
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60006_MissionBattleEvent60006_Ability03_Part02": {
      "fileName": "60006_MissionBattleEvent60006_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MissionOrWeekly",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MissionOrWeekly",
              "value": 3
            },
            "Trigger: Ability End"
          ],
          "failed": [
            {
              "name": "Looped Event",
              "maxLoops": 5,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Imaginary"
                    },
                    "Tags": null,
                    "attackType": "Ultimate"
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
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P1_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P1_ADF"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P2_ADF"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "Tags": null,
                "attackType": "Ultimate"
              }
            },
            "Trigger: Attack End",
            "Trigger: Ability End"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "60006_MissionBattleEvent60006_Ability03_Part01": {
      "fileName": "60006_MissionBattleEvent60006_Ability03_Part01",
      "childAbilityList": [
        "60006_MissionBattleEvent60006_Ability03_Part01",
        "60006_MissionBattleEvent60006_Ability03_Part02",
        "60006_MissionBattleEvent60006_Ability03_Part01_HuanLongTrigger",
        "60006_MissionBattleEvent60006_Ability03_Part02_HuanLongTrigger",
        "60006_MissionBattleEvent60006_Camera_01",
        "60006_MissionBattleEvent60006_Camera_02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MissionOrWeekly",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "MissionBattleEvent60006_Ability03_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "MissionBattleEvent60006_Ability03_Part02",
              "isTrigger": true
            },
            {
              "name": "UI Display Event",
              "popUpText": "Cloudhymn Roar"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6000601,
      "trigger": "Skill03",
      "name": "Cloudhymn Roar",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals massive Imaginary DMG to all enemies.",
      "energyCost": 120,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.5
        ]
      },
      "element": "Imaginary",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60006_Skill03_Phase01",
        "Avatar_MissionBattleEvent60006_Skill03_Phase02",
        "Avatar_MissionBattleEvent60006_Skill03_Phase01_HuanLongTrigger",
        "Avatar_MissionBattleEvent60006_Skill03_Phase02_HuanLongTrigger",
        "Avatar_MissionBattleEvent60006_Camera_01",
        "Avatar_MissionBattleEvent60006_Camera_02"
      ],
      "toughnessList": [
        0,
        60,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6000602,
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
      "element": "Imaginary",
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60006_PassiveSkill01"
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