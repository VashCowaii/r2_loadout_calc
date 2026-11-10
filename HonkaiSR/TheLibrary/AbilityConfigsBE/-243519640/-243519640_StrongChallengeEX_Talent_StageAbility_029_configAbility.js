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
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
      "type": "Buff",
      "statusName": "Cheat Sheet",
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
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "value": {
                "displayLines": "(MDF_AttackAddedRatio * MDF_Layer)"
              },
              "variableName": "MDF_PropertyValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_AttackAddedRatio * MDF_Layer)"
              }
            }
          ]
        }
      ]
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
              "value": 0,
              "variableName": "TARGET_COUNT"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    }
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
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Ability Targets of Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Sequence",
                          "TargetList": [
                            {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "Adjust Target by Ability Sub-Targets"
                          ]
                        }
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(TARGET_COUNT + 1)"
                      },
                      "variableName": "TARGET_COUNT"
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
                    "displayLines": "MDF_TGT_Lifetime"
                  },
                  "stackLimit": {
                    "displayLines": "MDF_TGT_MaxLayer"
                  },
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "displayLines": "MDF_TGT_AttackAddedRatio"
                    },
                    "MDF_MaxLayer": {
                      "displayLines": "MDF_TGT_MaxLayer"
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
                      "displayLines": "#ADF_1"
                    },
                    "MDF_TGT_Lifetime": {
                      "displayLines": "#ADF_2"
                    },
                    "MDF_TGT_MaxLayer": {
                      "displayLines": "#ADF_3"
                    }
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