const configAbility = {
  "fileName": "Seele_Modifiers",
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
      "for": "Seele_BPAbility_SpeedUpEidolon2[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "SpeedUp_Count",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to 2 stacks.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Seele_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Caster",
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
                  "name": "UI Display Event",
                  "popUpText": "DMG dealt increases by #1[i]%, and Quantum RES PEN +#2[i]%."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
      ],
      "stackData": [
        "seele_dmg_percent",
        "MDF_Penetrate"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Amplification",
      "duration": 1
    }
  ],
  "references": []
}