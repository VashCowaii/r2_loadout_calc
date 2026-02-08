const configAbility = {
  "fileName": "Phainon_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 3,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__722514042\">Phainon_Passive_AsAbilityTarget</a>",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"463303523\">Phainon_Passive_ChargeEnergyToGainSP</a>",
          "variables": {
            "parameter[0]_AddValue": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "of": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}.[[getTeamMembers]] - {{Caster}}"
            },
            "mustBeAlive2": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1491786902\">Phainon_Passive_Property</a>[<span class=\"descriptionNumberColor\">Pyric Corpus</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
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
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__463303523\">Phainon_Passive_ChargeEnergyToGainSP</a>",
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
            "displayLines": "parameter[0]_AddValue",
            "constants": [],
            "variables": [
              "parameter[0]_AddValue"
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "SpecialEnergy%",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1,
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CurOverflowSpecialSP",
                  "context": "ContextCaster",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1545922215\">Phainon_ClearAvatarArea</a>",
      "parse": [
        {
          "name": "Change Battle Arena",
          "arena": "PhainonBattleArea",
          "tag": "BattleArea01",
          "status": "Inactive",
          "priorityTag": "Character"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "IsAsyncLoad",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Change Character Model",
              "passed": [
                {
                  "name": "Set Render/Load State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "showOrLoad": false
                },
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
            {
              "name": "Change Character Model",
              "passed": [
                {
                  "name": "Set Render/Load State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "showOrLoad": false
                },
                "Deleted bullshit"
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}