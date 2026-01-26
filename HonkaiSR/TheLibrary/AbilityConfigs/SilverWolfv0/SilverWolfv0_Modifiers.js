const configAbility = {
  "fileName": "SilverWolfv0_Modifiers",
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
      "for": "Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
      "for": "Silwolf_Eidolon2_StatusResistanceDown[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
      "description": "Effect RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Effect RES Reduction",
      "statusName": "Effect RES Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
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
      "description": "All-Type DMG RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "All-Type RES Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedDown"
      ],
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
      "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Slow",
      "statusName": "Type-3 Bug"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
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
      "statusName": "Type-2 Bug"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttackDown"
      ],
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
      "description": "ATK -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "ATK Reduction",
      "statusName": "Type-1 Bug"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Extra Imaginary Weakness</span>]",
      "stackType": "Replace",
      "description": "Extra Imaginary Weakness implanted. Imaginary RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Extra Imaginary Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Quantum[<span class=\"descriptionNumberColor\">Extra Quantum Weakness</span>]",
      "stackType": "Replace",
      "description": "Extra Quantum Weakness implanted. Quantum RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Extra Quantum Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Thunder[<span class=\"descriptionNumberColor\">Extra Lightning Weakness</span>]",
      "stackType": "Replace",
      "description": "Extra Lightning Weakness implanted. Lightning RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Extra Lightning Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Physical[<span class=\"descriptionNumberColor\">Extra Physical Weakness</span>]",
      "stackType": "Replace",
      "description": "Extra Physical Weakness implanted. Physical RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Extra Physical Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Wind[<span class=\"descriptionNumberColor\">Extra Wind Weakness</span>]",
      "stackType": "Replace",
      "description": "Extra Wind Weakness implanted. Wind RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Extra Wind Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Ice[<span class=\"descriptionNumberColor\">Extra Ice Weakness</span>]",
      "stackType": "Replace",
      "description": "Extra Ice Weakness implanted. Ice RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Extra Ice Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Fire[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]",
      "stackType": "Replace",
      "description": "Extra Fire Weakness implanted. Fire RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Extra Fire Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType_Extra[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Implant Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "element": null,
              "resReduction": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "maxImplant": 1,
              "returnWeaknessVar": [
                "Silwolf_BPAbility_WeakType_01",
                "Silwolf_BPAbility_WeakType_02"
              ]
            }
          ]
        }
      ],
      "description": "Extra Weakness implanted. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Extra Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Implant Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "element": null,
              "resReduction": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "maxImplant": 1,
              "returnWeaknessVar": [
                "Silwolf_BPAbility_WeakType_01",
                "Silwolf_BPAbility_WeakType_02"
              ],
              "noNewWeaknesses": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Silwolf_Ability02_OverrideNameForStatus",
              "variables": {
                "DF_WeakType": {
                  "operator": "Variables[0] (_BPFlag) || RETURN",
                  "displayLines": "_BPFlag",
                  "constants": [],
                  "variables": [
                    "_BPFlag"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_BPFlag"
      ],
      "description": "Extra Weakness implanted. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Extra Weakness"
    }
  ],
  "references": []
}