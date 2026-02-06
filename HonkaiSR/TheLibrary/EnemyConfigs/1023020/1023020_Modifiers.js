const configAbility = {
  "fileName": "1023020_Modifiers",
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
      "for": "Monster_W1_Mecha03_01_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Rage[<span class=\"descriptionNumberColor\">Surpass</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W1_Mecha03_01_Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_W1_Mecha03_01_Effect"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_APShow"
            }
          ]
        },
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
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
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
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_AttackAddedRatio"
      ],
      "latentQueue": [],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Greatly Boosted",
      "statusName": "Surpass",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Effect",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Effect_Fail",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Charge",
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
                "operator": "Variables[0] (Modifier_AttackAddedRatio) || RETURN",
                "displayLines": "Modifier_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "Modifier_AttackAddedRatio"
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
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Bonus",
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
                "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                "displayLines": "MDF_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Overheat[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_DefenceAddedRatio)",
                "constants": [
                  0
                ],
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
      "description": "DEF -<span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Frozen[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_IceResistanceRatio",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_IceResistanceRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                "displayLines": "(0 - (MDF_IceResistanceRatio_PerLayer * ModifierLayers))",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_IceResistanceRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_IceResistanceRatio) || RETURN",
                "displayLines": "MDF_IceResistanceRatio",
                "constants": [],
                "variables": [
                  "MDF_IceResistanceRatio"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_SpeedAddedDelta",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedAddedDelta_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                "displayLines": "(0 - (MDF_SpeedAddedDelta_PerLayer * ModifierLayers))",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_SpeedAddedDelta_PerLayer",
                  "ModifierLayers"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedDelta) || RETURN",
                "displayLines": "MDF_SpeedAddedDelta",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedDelta"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_IceResistanceRatio_PerLayer",
        "MDF_SpeedAddedDelta_PerLayer",
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "Reduces Ice RES by <span class=\"descriptionNumberColor\">MDF_IceResistanceRatio_PerLayer</span> and SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedDelta_PerLayer</span>. Can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Debuff",
      "effectName": "Deep Freeze",
      "statusName": "Deep Freeze",
      "stackLimit": 5,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Attack",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Shield",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
              "value": 0.5
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_Armor",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Modifier_DefenceAddedRatio) || RETURN",
                "displayLines": "Modifier_DefenceAddedRatio",
                "constants": [],
                "variables": [
                  "Modifier_DefenceAddedRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_SummonMark",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_01_AOECount[<span class=\"descriptionNumberColor\">Bitterly Cold</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Unleashes <span class=\"descriptionNumberColor\">ModifierLayers</span> wave(s) of Blazing Freeze in the next action.",
      "type": "Other",
      "statusName": "Bitterly Cold",
      "stackLimit": 4,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    }
  ],
  "references": []
}