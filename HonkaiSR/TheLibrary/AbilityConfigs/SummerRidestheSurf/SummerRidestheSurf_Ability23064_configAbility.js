const configAbility = {
  "fileName": "SummerRidestheSurf_Ability23064",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1525954664\">LC_23064_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2133142863\">LC_23064_Bonus_2</a>[<span class=\"descriptionNumberColor\">Uptrend</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "Elation Boost",
      "statusName": "Uptrend",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "displayLines": "MDF_PropertyRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2111491576\">LC_23064_Bonus_1</a>[<span class=\"descriptionNumberColor\">Updraft</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Updraft",
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
                "displayLines": "MDF_PropertyRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1525954664\">LC_23064_Main</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Ability Property",
                  "variableName": "_CurrentElationSkillIndex",
                  "propertyName": "Ability Index",
                  "currentAbility": true,
                  "context": "ContextModifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2111491576\">LC_23064_Bonus_1</a>[<span class=\"descriptionNumberColor\">Updraft</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "0.24"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_CurrentElationSkillIndex",
                        "compareType": "NOT=",
                        "value2": {
                          "displayLines": "_LastElationSkillIndex"
                        },
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_LastElationSkillIndex",
                        "compareType": "NOT=",
                        "value2": -1,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2133142863\">LC_23064_Bonus_2</a>[<span class=\"descriptionNumberColor\">Uptrend</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "displayLines": "0.4"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "value": {
                    "displayLines": "_CurrentElationSkillIndex"
                  },
                  "variableName": "_LastElationSkillIndex"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ElationSkillCastNum",
                  "context": "ContextModifier",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_ElationSkillCastNum",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "3"
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "value": 0,
                      "variableName": "_ElationSkillCastNum"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            }
          ]
        }
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. When the wearer uses Elation Skill, gains \"Updraft,\" which increases the wearer's SPD by #2[i]%. If the Elation Skill used is different from the one used last time, additionally gains \"Uptrend,\" which increases the wearer's Elation by #3[i]%.\\nWhen every wave starts or after the wearer uses Elation Skill #4[i] time(s), recovers 1 Skill Point.",
  "params": [
    [
      0.18,
      0.24,
      0.4,
      3
    ],
    [
      0.21,
      0.28,
      0.55,
      3
    ],
    [
      0.24,
      0.32,
      0.7,
      3
    ],
    [
      0.27,
      0.36,
      0.85,
      3
    ],
    [
      0.3,
      0.4,
      1,
      3
    ]
  ]
}