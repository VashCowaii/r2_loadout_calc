const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61004,
  "trimCharacterName": 61004,
  "abilityList": [
    "61004_ActionEventAbility_Standard_PassiveAbility",
    "61004_ActionEventAbility_Camera_AllDarkTeam",
    "61004_HeliobusActionAbilityBoomerang_Ability03_Part02",
    "61004_HeliobusActionAbilityBoomerang_Ability03_Part01",
    "61004_HeliobusActionAbilityBoomerang_Ability03_EnterReady"
  ],
  "abilityObject": {
    "61004_ActionEventAbility_Standard_PassiveAbility": {
      "fileName": "61004_ActionEventAbility_Standard_PassiveAbility",
      "childAbilityList": [
        "61004_ActionEventAbility_Standard_PassiveAbility"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "toughnessList": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"-1945570590\">Modifier_AutoUseUltraAbility</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1945570590\">Modifier_AutoUseUltraAbility</a>",
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "61004_ActionEventAbility_Camera_AllDarkTeam": {
      "fileName": "61004_ActionEventAbility_Camera_AllDarkTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61004_HeliobusActionAbilityBoomerang_Ability03_Part02": {
      "fileName": "61004_HeliobusActionAbilityBoomerang_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Edict: Woe Exile"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1885987671\">HeliobusActionAbilityBoomerang_Ability03_BreakListener</a>"
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
            "name": "Target Has Lowest/Highest Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "partOf": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
            "minOrMax": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true,
                "includeNonTargets": true
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
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
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxAttack) || Variables[1] (#BattleEvent_P1_ADF) || MUL || RETURN",
                  "displayLines": "(_MaxAttack * #BattleEvent_P1_ADF)",
                  "constants": [],
                  "variables": [
                    "_MaxAttack",
                    "#BattleEvent_P1_ADF"
                  ]
                },
                "Toughness": {
                  "displayLines": 20
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
                "attackType": "Level"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-605314136\">HeliobusActionAbilityBoomerang_DOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
              "duration": {
                "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                "displayLines": "#BattleEvent_P4_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P4_ADF"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                "displayLines": "#BattleEvent_P5_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P5_ADF"
                ]
              },
              "valuePerStack": {
                "Modifier_Bleed_DamagePercentage": {
                  "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P3_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P3_ADF"
                  ]
                },
                "Modifier_Bleed_MaxLayer": {
                  "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P5_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P5_ADF"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (#BattleEvent_P2_ADF) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(#BattleEvent_P2_ADF - 1)",
            "constants": [
              1
            ],
            "variables": [
              "#BattleEvent_P2_ADF"
            ]
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true,
                    "includeNonTargets": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
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
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxAttack) || Variables[1] (#BattleEvent_P1_ADF) || MUL || RETURN",
                      "displayLines": "(_MaxAttack * #BattleEvent_P1_ADF)",
                      "constants": [],
                      "variables": [
                        "_MaxAttack",
                        "#BattleEvent_P1_ADF"
                      ]
                    },
                    "Toughness": {
                      "displayLines": 20
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Physical"
                    },
                    "Tags": null,
                    "attackType": "Level"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-605314136\">HeliobusActionAbilityBoomerang_DOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P4_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P4_ADF"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P5_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P5_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Bleed_DamagePercentage": {
                      "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P3_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P3_ADF"
                      ]
                    },
                    "Modifier_Bleed_MaxLayer": {
                      "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P5_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P5_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1885987671\">HeliobusActionAbilityBoomerang_Ability03_BreakListener</a>"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-605314136\">HeliobusActionAbilityBoomerang_DOT</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed"
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Modifier_Bleed_DamagePercentage",
            "Modifier_Bleed_MaxLayer"
          ],
          "description": "For a certain number of turns, enemies receive Physical DMG based on their Max HP at the beginning of each turn, stacking up to <span class=\"descriptionNumberColor\">Modifier_Bleed_MaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Modifier_Bleed_MaxLayer",
                  "value": {
                    "operator": "Variables[0] (Modifier_Bleed_MaxLayer) || RETURN",
                    "displayLines": "Modifier_Bleed_MaxLayer",
                    "constants": [],
                    "variables": [
                      "Modifier_Bleed_MaxLayer"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || RETURN",
                      "displayLines": "((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer)",
                      "constants": [],
                      "variables": [
                        "Owner_MaxHP",
                        "Modifier_Bleed_DamagePercentage",
                        "Modifier_Layer"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Owner_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Owner_MaxHP) || Variables[1] (Modifier_Bleed_DamagePercentage) || MUL || Variables[2] (Modifier_Layer) || MUL || Variables[3] (DOT_TriggerRatio) || MUL || RETURN",
                      "displayLines": "(((Owner_MaxHP * Modifier_Bleed_DamagePercentage) * Modifier_Layer) * DOT_TriggerRatio)",
                      "constants": [],
                      "variables": [
                        "Owner_MaxHP",
                        "Modifier_Bleed_DamagePercentage",
                        "Modifier_Layer",
                        "DOT_TriggerRatio"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1452170761\">HeliobusActionAbilityBoomerang_Ability03_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"485608192\">StanceBreak_Physical</a>",
                  "variables": {}
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1452170761\">HeliobusActionAbilityBoomerang_Ability03_Break</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1885987671\">HeliobusActionAbilityBoomerang_Ability03_BreakListener</a>",
          "execute": [
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1452170761\">HeliobusActionAbilityBoomerang_Ability03_Break</a>"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "61004_HeliobusActionAbilityBoomerang_Ability03_Part01": {
      "fileName": "61004_HeliobusActionAbilityBoomerang_Ability03_Part01",
      "childAbilityList": [
        "61004_HeliobusActionAbilityBoomerang_Ability03_EnterReady",
        "61004_HeliobusActionAbilityBoomerang_Ability03_Part01",
        "61004_HeliobusActionAbilityBoomerang_Ability03_Part02",
        "61004_ActionEventAbility_Camera_AllDarkTeam"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "HeliobusActionAbilityBoomerang_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "61004_HeliobusActionAbilityBoomerang_Ability03_EnterReady": {
      "fileName": "61004_HeliobusActionAbilityBoomerang_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6100401,
      "trigger": "Skill03",
      "name": "Edict: Woe Exile",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Deals Physical DMG equal to #1[i]% of the ATK of the ally with the highest ATK on the team to a random enemy, repeating for #2[i] time(s). Each DMG application applies Bleed to the target, lasting for #4[i] turn(s) and stacking up to #5[i] stack(s).\\nWhile Bleeding, enemy targets receive Physical DoT equal to #3[i]% of their Max HP at the start of every turn.",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0
        ]
      },
      "skillEffect": "Bounce",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_HeliobusActionAbilityBoomerang_Skill03_EnterReady",
        "Avatar_HeliobusActionAbilityBoomerang_Skill03_Phase01",
        "Avatar_HeliobusActionAbilityBoomerang_Skill03_Phase02",
        "ActionEventAbility_Camera_AllDarkTeam"
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