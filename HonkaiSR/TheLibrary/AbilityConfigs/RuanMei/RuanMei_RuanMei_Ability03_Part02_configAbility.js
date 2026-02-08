const configAbility = {
  "fileName": "RuanMei_RuanMei_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
          "duration": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "valuePerStack": {
            "Ability03_P1_PenetrateRatio": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "Ability03_P1_PenetrateRatio": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1242682284\">RuanMei_Ability03_Area_Eidolon1_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
      "stackType": "ReplaceByCaster",
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">Skill03_P1_PenetrateRatio</span>. When dealing DMG, ignores <span class=\"descriptionNumberColor\">SkillRank_Rank01_P1_IgnoreDEFRatio_Friend</span> of the target's DEF.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Petals to Stream, Repose in Dream"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1476311818\">RuanMei_Ability03_Area_Friend</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
      "stackType": "ReplaceByCaster",
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">Skill03_P1_PenetrateRatio</span>.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Petals to Stream, Repose in Dream"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_LifeTime",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
                      "value": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valueType": "Duration"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">#Skill03_P1_PenetrateRatio</span>. When dealing DMG, ignores <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_IgnoreDEFRatio</span> of the target's DEF.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Petals to Stream, Repose in Dream"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-995060554\">RuanMei_Ability03_Area_Caster</a>[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_LifeTime",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1385395722\">RuanMei_PassiveArea</a>",
                      "value": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valueType": "Duration"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">#Skill03_P1_PenetrateRatio</span>.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Petals to Stream, Repose in Dream"
    }
  ]
}