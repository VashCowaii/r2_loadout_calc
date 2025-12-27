const configAbility = {
  "fileName": "Bronya_Modifiers",
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
      "for": "Bronya_Tree02_DefenceUp[<span class=\"descriptionNumberColor\">Battlefield</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                "displayLines": "MDF_DefenceAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DefenceAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DefenceAddedRatio"
      ],
      "latentQueue": [],
      "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>",
      "type": "Buff",
      "statusName": "Battlefield"
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_Tree03_DamageUp",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeAddedRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                "operator": "Variables[0] (Bronya_SpeedUP_Ratio) || RETURN",
                "displayLines": "Bronya_SpeedUP_Ratio",
                "constants": [],
                "variables": [
                  "Bronya_SpeedUP_Ratio"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">Bronya_SpeedUP_Ratio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_BPAbility_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                "displayLines": "MDF_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddedRatio"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_Ultimate_PowerUp[<span class=\"descriptionNumberColor\">The Belobog March</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Bronya_CriticalDamage) || RETURN",
                "displayLines": "Bronya_CriticalDamage",
                "constants": [],
                "variables": [
                  "Bronya_CriticalDamage"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackAddedRatio",
        "Bronya_CriticalDamage"
      ],
      "latentQueue": [],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span> and CRIT DMG +<span class=\"descriptionNumberColor\">Bronya_CriticalDamage</span>.",
      "type": "Buff",
      "effectName": "ATK and CRIT DMG Boost",
      "statusName": "The Belobog March",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_Eidolon1_CoolDown[<span class=\"descriptionNumberColor\">Hone Your Strength</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "Hone Your Strength effect cannot be triggered.",
      "type": "Other",
      "statusName": "Hone Your Strength"
    },
    {
      "name": "Modifier Construction",
      "for": "Bronya_BPAbility_Eidolon2_Listen",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Bronya_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": 1,
              "valuePerStack": {
                "Bronya_SpeedUP_Ratio": {
                  "operator": "Variables[0] (Bronya_SpeedUP_Ratio_01) || RETURN",
                  "displayLines": "Bronya_SpeedUP_Ratio_01",
                  "constants": [],
                  "variables": [
                    "Bronya_SpeedUP_Ratio_01"
                  ]
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "Bronya_SpeedUP_Ratio_01"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": "Owner of this Modifier",
            "modifier": "Bronya_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "Bronya_SpeedUP_Ratio_01(SPD Change)"
        }
      }
    }
  ],
  "references": []
}