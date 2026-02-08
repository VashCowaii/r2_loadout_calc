const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_029",
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
      "modifier": "<a class=\"gModGreen\" id=\"-670713149\">MStrongChallengeEX_Talent_StageAbility_LE_029</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__254716271\">MStrongChallengeEX_Talent_StageAbility_TGT_029</a>[<span class=\"descriptionNumberColor\">Cheat Sheet</span>]",
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
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AttackAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AttackAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
      "type": "Buff",
      "statusName": "Cheat Sheet",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1091775973\">MStrongChallengeEX_Talent_StageAbility_PLY_029</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "TARGET_COUNT",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "Adjust Target by Ability Sub-Targets"
                          ]
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TARGET_COUNT",
                      "value": {
                        "operator": "Variables[0] (TARGET_COUNT) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(TARGET_COUNT + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "TARGET_COUNT"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TARGET_COUNT",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"254716271\">MStrongChallengeEX_Talent_StageAbility_TGT_029</a>[<span class=\"descriptionNumberColor\">Cheat Sheet</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_TGT_Lifetime) || RETURN",
                    "displayLines": "MDF_TGT_Lifetime",
                    "constants": [],
                    "variables": [
                      "MDF_TGT_Lifetime"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_TGT_MaxLayer) || RETURN",
                    "displayLines": "MDF_TGT_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_TGT_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (MDF_TGT_AttackAddedRatio) || RETURN",
                      "displayLines": "MDF_TGT_AttackAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_TGT_AttackAddedRatio"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (MDF_TGT_MaxLayer) || RETURN",
                      "displayLines": "MDF_TGT_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_TGT_MaxLayer"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-670713149\">MStrongChallengeEX_Talent_StageAbility_LE_029</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1091775973\">MStrongChallengeEX_Talent_StageAbility_PLY_029</a>",
                  "valuePerStack": {
                    "MDF_TGT_AttackAddedRatio": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_TGT_Lifetime": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "MDF_TGT_MaxLayer": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  }
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
}