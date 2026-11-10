const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_044",
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
      "modifier": "<a class=\"gModGreen\" id=\"-418063126\">MStrongChallengeEX_Talent_StageAbility_LE_044</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2044111722\">MStrongChallengeEX_Talent_StageAbility_TGT_044</a>[<span class=\"descriptionNumberColor\">Teach By Banaxample</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CriticalDamage</span>. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "statusName": "Teach By Banaxample",
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
                "displayLines": "(MDF_CriticalDamage * MDF_Layer)"
              },
              "variableName": "MDF_PropertyValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_CriticalDamage * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1107567854\">MStrongChallengeEX_Talent_StageAbility_PLY_044</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2044111722\">MStrongChallengeEX_Talent_StageAbility_TGT_044</a>[<span class=\"descriptionNumberColor\">Teach By Banaxample</span>]",
                  "duration": {
                    "displayLines": "MDF_TGT_Lifetime"
                  },
                  "stackLimit": {
                    "displayLines": "MDF_TGT_MaxLayer"
                  },
                  "valuePerStack": {
                    "MDF_CriticalDamage": {
                      "displayLines": "MDF_TGT_CriticalDamage"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-418063126\">MStrongChallengeEX_Talent_StageAbility_LE_044</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1107567854\">MStrongChallengeEX_Talent_StageAbility_PLY_044</a>",
                  "valuePerStack": {
                    "MDF_TGT_CriticalDamage": {
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