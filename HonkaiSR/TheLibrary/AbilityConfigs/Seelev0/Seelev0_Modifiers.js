const configAbility = {
  "fileName": "Seelev0_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1119246325\">ADV_Modifier_MazeEffect_Stealth</a>",
      "counter": 1,
      "stackType": "Refresh",
      "duration": 1.5
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2022324518\">ADV_Modifier_MazeEffect_Seele</a>",
      "counter": 1,
      "stackType": "Refresh",
      "modifierFlags": [
        "Stealth"
      ],
      "duration": 20,
      "onCreation": [
        {
          "name": "Overworld Filter Enemies",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Task Action Target}}"
              },
              "modifier": null,
              "ID": "1000118(null)"
            }
          ]
        }
      ],
      "onStageExit": [
        "Modifier Deletes Itself"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__156399431\">ADV_Modifier_Maze_Seele</a>",
      "counter": 1,
      "stackType": "Refresh",
      "duration": 20,
      "onStageExit": [
        "Modifier Deletes Itself"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-451187688\">ADV_StageAbility_Maze_Seele</a>",
      "counter": 1,
      "stackType": "Refresh"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to 2 stacks.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
      "stackLimit": 3,
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
              "variableName": "SpeedUp_Count",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (SpeedUp_Count) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * SpeedUp_Count)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "SpeedUp_Count"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-456765622\">Seele_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Amplification",
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (seele_dmg_percent) || RETURN",
                "displayLines": "seele_dmg_percent",
                "constants": [],
                "variables": [
                  "seele_dmg_percent"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Lacerate"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DMG dealt increases by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>, and Quantum RES PEN +<span class=\"descriptionNumberColor\">MDF_Penetrate</span>."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Penetrate) || RETURN",
                    "displayLines": "MDF_Penetrate",
                    "constants": [],
                    "variables": [
                      "MDF_Penetrate"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}