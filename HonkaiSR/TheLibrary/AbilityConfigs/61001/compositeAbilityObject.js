const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61001,
  "trimCharacterName": 61001,
  "abilityList": [
    "61001_ActionEventAbility_Standard_PassiveAbility",
    "61001_ActionEventAbility_Camera_AllDarkTeam",
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
    "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady"
  ],
  "abilityObject": {
    "61001_ActionEventAbility_Standard_PassiveAbility": {
      "fileName": "61001_ActionEventAbility_Standard_PassiveAbility",
      "childAbilityList": [
        "61001_ActionEventAbility_Standard_PassiveAbility"
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
    "61001_ActionEventAbility_Camera_AllDarkTeam": {
      "fileName": "61001_ActionEventAbility_Camera_AllDarkTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part02": {
      "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Edict: Evil Cleanse"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxStance"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1936406658\">HeliobusActionAbilityForceBreak_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                "displayLines": "#BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P3_ADF"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (_MaxStance) || RETURN",
                  "displayLines": "_MaxStance",
                  "constants": [],
                  "variables": [
                    "_MaxStance"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "AllType"
                },
                "Tags": null,
                "attackType": "Level"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxAttack) || Variables[1] (#BattleEvent_P2_ADF) || MUL || RETURN",
                  "displayLines": "(_MaxAttack * #BattleEvent_P2_ADF)",
                  "constants": [],
                  "variables": [
                    "_MaxAttack",
                    "#BattleEvent_P2_ADF"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (_MaxStance) || RETURN",
                  "displayLines": "_MaxStance",
                  "constants": [],
                  "variables": [
                    "_MaxStance"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "AllType"
                },
                "Tags": null,
                "attackType": "Level"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>",
          "execute": [
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "TargetStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": 0,
                    "MDF_DamagePercentage": {
                      "operator": "Constants[0] (0.6) || Constants[1] (2) || Variables[0] (TargetStance) || Constants[2] (30) || DIV || ADD || MUL || Constants[3] (4) || DIV || RETURN",
                      "displayLines": "((0.6 * (2 + (TargetStance / 30))) / 4)",
                      "constants": [
                        0.6,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "TargetStance"
                      ]
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Constants[2] (30) || DIV || ADD || MUL || Constants[3] (4) || DIV || RETURN",
                      "displayLines": "((0.5 * (2 + (TargetStance / 30))) / 4)",
                      "constants": [
                        0.5,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "TargetStance"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1936406658\">HeliobusActionAbilityForceBreak_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P1_ADF"
                    ]
                  }
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
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part01": {
      "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
      "childAbilityList": [
        "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady",
        "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
        "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
        "61001_ActionEventAbility_Camera_AllDarkTeam"
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
          "ability": "HeliobusActionAbilityForceBreak_Ability03_Part02",
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
    "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady": {
      "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady",
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
      "skillID": 6100101,
      "trigger": "Skill03",
      "name": "Edict: Evil Cleanse",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Depletes all enemies' Toughness and inflicts Weakness Break equal to the effects of Quantum Break. Based on the highest ATK on the team, deals Quantum DMG equal to #2[i]% of ATK to all enemies and increases enemies' DMG received by #1[i]% for #3[i] turn(s).",
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
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_HeliobusActionAbilityForceBreak_Skill03_EnterReady",
        "Avatar_HeliobusActionAbilityForceBreak_Skill03_Phase01",
        "Avatar_HeliobusActionAbilityForceBreak_Skill03_Phase02",
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