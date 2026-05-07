const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 44,
  "trimCharacterName": 44,
  "abilityList": [
    "44_BattleEventAbility_620301"
  ],
  "abilityObject": {
    "44_BattleEventAbility_620301": {
      "fileName": "44_BattleEventAbility_620301",
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
          "modifier": "<a class=\"gModGreen\" id=\"-418124996\">Modifier_BattleEventAbility_620301</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1826522727\">MLevel_StageAbility_620301_Modifier_Sub2</a>",
          "stackType": "ReplaceByCaster",
          "addStacksPerTrigger": 1,
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_1) || MUL || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "((-1 * MDF_1) * MDF_Layer)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_1",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_2) || MUL || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "((-1 * MDF_2) * MDF_Layer)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-418124996\">Modifier_BattleEventAbility_620301</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1166335492\">Challenge_Camera_AllTeam_Temp_1</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1216668349\">Challenge_Camera_AllTeam_Temp_2</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (ADF_1) || RETURN",
                      "displayLines": "ADF_1",
                      "constants": [],
                      "variables": [
                        "ADF_1"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Follow-up"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": {
                    "operator": "Variables[0] (ADF_2) || Variables[1] ([object Object]) || ADD || RETURN",
                    "displayLines": "(ADF_2 + [object Object])",
                    "constants": [],
                    "variables": [
                      "ADF_2",
                      {}
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Rouge_620301_Level",
                    "compareType": ">=",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1826522727\">MLevel_StageAbility_620301_Modifier_Sub2</a>",
                      "duration": 3,
                      "baseChance": {
                        "operator": "Variables[0] (ADF_3) || RETURN",
                        "displayLines": "ADF_3",
                        "constants": [],
                        "variables": [
                          "ADF_3"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (Skill_PercentageMuti_620301) || RETURN",
                        "displayLines": "Skill_PercentageMuti_620301",
                        "constants": [],
                        "variables": [
                          "Skill_PercentageMuti_620301"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] (ADF_4) || RETURN",
                          "displayLines": "ADF_4",
                          "constants": [],
                          "variables": [
                            "ADF_4"
                          ]
                        },
                        "MDF_2": {
                          "operator": "Variables[0] (ADF_5) || Variables[1] (IceResistanceAdd_620301) || ADD || RETURN",
                          "displayLines": "(ADF_5 + IceResistanceAdd_620301)",
                          "constants": [],
                          "variables": [
                            "ADF_5",
                            "IceResistanceAdd_620301"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (Skill_PercentageMuti_620301) || RETURN",
                          "displayLines": "Skill_PercentageMuti_620301",
                          "constants": [],
                          "variables": [
                            "Skill_PercentageMuti_620301"
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
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1826522727\">MLevel_StageAbility_620301_Modifier_Sub2</a>",
                      "duration": 3,
                      "baseChance": {
                        "operator": "Variables[0] (ADF_3) || RETURN",
                        "displayLines": "ADF_3",
                        "constants": [],
                        "variables": [
                          "ADF_3"
                        ]
                      },
                      "stackLimit": 1,
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] (ADF_4) || RETURN",
                          "displayLines": "ADF_4",
                          "constants": [],
                          "variables": [
                            "ADF_4"
                          ]
                        },
                        "MDF_2": {
                          "operator": "Variables[0] (ADF_5) || Variables[1] (IceResistanceAdd_620301) || ADD || RETURN",
                          "displayLines": "(ADF_5 + IceResistanceAdd_620301)",
                          "constants": [],
                          "variables": [
                            "ADF_5",
                            "IceResistanceAdd_620301"
                          ]
                        },
                        "MDF_MaxLayer": 1
                      }
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
                    "name": "Compare: Variable",
                    "value1": "Rouge_620301_Level",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (ADF_6) || RETURN",
                        "displayLines": "ADF_6",
                        "constants": [],
                        "variables": [
                          "ADF_6"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Rouge_620301_Level",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill_PercentageMuti_620301",
                      "value": {
                        "operator": "Variables[0] (ADF_7) || RETURN",
                        "displayLines": "ADF_7",
                        "constants": [],
                        "variables": [
                          "ADF_7"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Rouge_620301_Level",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IceResistanceAdd_620301",
                      "value": {
                        "operator": "Variables[0] (ADF_8) || RETURN",
                        "displayLines": "ADF_8",
                        "constants": [],
                        "variables": [
                          "ADF_8"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}