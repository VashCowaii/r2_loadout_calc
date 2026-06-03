const configAbility = {
  "fileName": "MortenaxBlade_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__349219986\">MortenaxBlade_TrytoPlayAutoBP</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "G_EnergyCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (G_EPMax) || RETURN",
                  "displayLines": "G_EPMax",
                  "constants": [],
                  "variables": [
                    "G_EPMax"
                  ]
                }
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "G_ExSkill21_Allowed",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": "MortenaxBlade_Passive",
              "skillIndex": 3,
              "forceAction": true,
              "conditions": {
                "name": "Insert Ability Condition",
                "type": "SameTagInsertUnusedCount",
                "typeValue": 1
              },
              "castTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "afterInjection": [],
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "ignoreCost": true,
              "condition": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "G_EnergyCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (G_EPMax) || RETURN",
                      "displayLines": "G_EPMax",
                      "constants": [],
                      "variables": [
                        "G_EPMax"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 1
                  }
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (G_EnergyCount) || RETURN",
                    "displayLines": "G_EnergyCount",
                    "constants": [],
                    "variables": [
                      "G_EnergyCount"
                    ]
                  },
                  "priorState": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (G_EnergyCount) || RETURN",
                    "displayLines": "G_EnergyCount",
                    "constants": [],
                    "variables": [
                      "G_EnergyCount"
                    ]
                  },
                  "priorState": "Disable"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}