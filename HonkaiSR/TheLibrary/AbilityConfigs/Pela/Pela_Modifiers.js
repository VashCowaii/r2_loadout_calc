const configAbility = {
  "fileName": "Pela_Modifiers",
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
      "for": "Pela_StatusProbability",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Pela_TechniqueUsage_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
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
      "description": "DEF -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Pela_AbilityEidolon4_IceResistanceDown[<span class=\"descriptionNumberColor\">Ice RES Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
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
      "description": "Ice RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Ice RES Reduction",
      "statusName": "Ice RES Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Pela_AbilityEidolon4_StanceBreakTaken[<span class=\"descriptionNumberColor\">Ravage</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                "displayLines": "MDF_StanceBreakTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakTakenRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG taken on Toughness +<span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Toughness Vulnerability",
      "statusName": "Ravage"
    },
    {
      "name": "Modifier Construction",
      "for": "Pela_AbilityEidolon2_AddSpeedRatio[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                "operator": "Variables[0] (MDF_Pela_SkillRank02_P1_AddSpeedRatio) || RETURN",
                "displayLines": "MDF_Pela_SkillRank02_P1_AddSpeedRatio",
                "constants": [],
                "variables": [
                  "MDF_Pela_SkillRank02_P1_AddSpeedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Pela_SkillRank02_P1_AddSpeedRatio"
      ],
      "latentQueue": [],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_Pela_SkillRank02_P1_AddSpeedRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Pela_Trace03_DamageAddedRatio[<span class=\"descriptionNumberColor\">Wipe Out</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "on": "Attacker",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Pela_SkillTree03_DamageAddedRatio) || RETURN",
                "displayLines": "MDF_Pela_SkillTree03_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_Pela_SkillTree03_DamageAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_Pela_SkillTree03_DamageAddedRatio"
      ],
      "latentQueue": [],
      "description": "Increases the next attack's DMG by <span class=\"descriptionNumberColor\">MDF_Pela_SkillTree03_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Wipe Out"
    }
  ],
  "references": []
}