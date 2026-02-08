const configAbility = {
  "fileName": "NightontheMilkyWay_Ability23000",
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
      "modifier": "<a class=\"gModGreen\" id=\"811349894\">LC_23000_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-434068914\">LC_23000_AttackAddedRatio</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-651116041\">LC_23000_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__811349894\">LC_23000_Main</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "EnemyCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnemyCount",
                "compareType": ">",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnemyCount",
                  "value": 5
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-434068914\">LC_23000_AttackAddedRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.09) || Variables[1] (EnemyCount) || MUL || RETURN",
                  "displayLines": "(0.09 * EnemyCount)",
                  "constants": [],
                  "variables": [
                    0.09,
                    "EnemyCount"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"690610209\">TaskList_LC_23000_OnDieOrEscape</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"690610209\">TaskList_LC_23000_OnDieOrEscape</a>"
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
              "variableName": "EnemyCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnemyCount",
                "compareType": ">",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnemyCount",
                  "value": 5
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-434068914\">LC_23000_AttackAddedRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.09) || Variables[1] (EnemyCount) || MUL || RETURN",
                  "displayLines": "(0.09 * EnemyCount)",
                  "constants": [],
                  "variables": [
                    0.09,
                    "EnemyCount"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-651116041\">LC_23000_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__690610209\">TaskList_LC_23000_OnDieOrEscape</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "EnemyCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnemyCount",
                "compareType": ">",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnemyCount",
                  "value": 5
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-434068914\">LC_23000_AttackAddedRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.09) || Variables[1] (EnemyCount) || MUL || RETURN",
                  "displayLines": "(0.09 * EnemyCount)",
                  "constants": [],
                  "variables": [
                    0.09,
                    "EnemyCount"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "For every enemy on the field, increases the wearer's ATK by #2[f1]%, up to 5 stacks. When an enemy is inflicted with Weakness Break, the DMG dealt by the wearer increases by #1[i]% for 1 turn.",
  "params": [
    [
      0.3,
      0.09
    ],
    [
      0.35,
      0.105
    ],
    [
      0.4,
      0.12
    ],
    [
      0.45,
      0.135
    ],
    [
      0.5,
      0.15
    ]
  ]
}