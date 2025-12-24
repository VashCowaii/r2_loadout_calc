const configAbility = {
  "fileName": "Saber_Modifiers",
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
      "for": "Saber_Wind_Ability03_buff",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Losing Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Caster",
              "display": "Hide",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill02",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            }
          ]
        },
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Caster",
              "display": "Show",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": "Caster",
              "display": "Hide",
              "abilityName": "Skill"
            },
            {
              "name": "Disable Abilities",
              "target": "Caster",
              "abilityTypes": [
                "Skill"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_DisableAbility",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": "Caster",
              "abilityTypes": [
                "Skill"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Ability03_CD_02",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Turn Is",
                    "target": "Caster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Knight of the Dragon"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Ability03_CD[<span class=\"descriptionNumberColor\">Mana Burst</span>]",
      "stackData": [],
      "latentQueue": [
        "S11_Alive_Count"
      ],
      "description": "When Saber has \"Core Resonance,\" and if using Skill and consuming \"Core Resonance\" can fully regenerate her Energy, consumes \"Mana Burst\" to cause Saber to immediately take action and recover 1 Skill Point for allies.",
      "type": "Other",
      "effectName": "Mana Burst",
      "statusName": "Mana Burst"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Trace03_Bonus[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "latentQueue": [
        "Saber_00_EntityMaxStockSP"
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Crown of the Star"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Passive_Bonus[<span class=\"descriptionNumberColor\">Dragon Reactor Core</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Dragon Reactor Core"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_AIFlag",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "on": "Defender",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "S11_Alive_Count"
      ],
      "description": "Each stack causes DMG dealt by Saber to ignore <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P2_Ratio</span> of the target's DEF.",
      "type": "Buff",
      "statusName": "The Lost Oath of the Round Table"
    },
    {
      "name": "Modifier Construction",
      "for": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "S11_Alive_Count"
      ],
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Crown of the Star"
    }
  ],
  "references": []
}