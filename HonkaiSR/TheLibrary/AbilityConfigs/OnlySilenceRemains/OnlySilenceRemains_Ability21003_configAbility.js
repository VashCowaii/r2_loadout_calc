const configAbility = {
  "fileName": "OnlySilenceRemains_Ability21003",
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
      "modifier": "LC_21003_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21003_CriticalChance",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21003_Main",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "TaskList_LC_21003_OnDieOrEscape"
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "TaskList_LC_21003_OnDieOrEscape"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "_EnemyCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_EnemyCount",
                "compareType": "<=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_21003_CriticalChance",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_21003_CriticalChance"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_LC_21003_OnDieOrEscape",
          "parse": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "_EnemyCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_EnemyCount",
                "compareType": "<=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_21003_CriticalChance",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_21003_CriticalChance"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's ATK by #1[i]%. If there are 2 or fewer enemies on the field, increases wearer's CRIT Rate by #2[i]%.",
  "params": [
    [
      0.16,
      0.12
    ],
    [
      0.2,
      0.15
    ],
    [
      0.24,
      0.18
    ],
    [
      0.28,
      0.21
    ],
    [
      0.32,
      0.24
    ]
  ]
}