const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Month_08",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1060717585\">Modifier_BattleEventAbility_Challenge_Month_08</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1569804105\">MLevel_BattleEventAbility_Challenge_Month_08</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || INVERT || Variables[1] (ADF_1) || MUL || RETURN",
                "displayLines": "(-MDF_Layer * ADF_1)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  "ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack decreases DEF by <span class=\"descriptionNumberColor\">ADF_1</span>, up to <span class=\"descriptionNumberColor\">ADF_2</span> stack(s).",
      "type": "Debuff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1060717585\">Modifier_BattleEventAbility_Challenge_Month_08</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ability": "BattleEventAbility_Camear_AllDarkTeam",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ability": "BattleEventAbility_Camear_AllDarkTeam_RemoveModifier",
              "isTrigger": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1569804105\">MLevel_BattleEventAbility_Challenge_Month_08</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_DebuffNumber"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1569804105\">MLevel_BattleEventAbility_Challenge_Month_08</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "ADF_1": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
                      ]
                    },
                    "ADF_2": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (_DebuffNumber) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_DebuffNumber + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_DebuffNumber"
                    ]
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