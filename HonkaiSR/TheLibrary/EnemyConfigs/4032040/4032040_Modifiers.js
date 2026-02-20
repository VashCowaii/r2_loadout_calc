const configAbility = {
  "fileName": "4032040_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__264567512\">Enemy_W4_Scholar_01_StealthBreak</a>[<span class=\"descriptionNumberColor\">Flawed</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "ForceHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_ActionDelayRatio"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Flawed",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]",
      "modifierFlags": [
        "Stealth"
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-212213853\">Enemy_W4_Scholar_01_Stealth_Effect</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StealthBreak_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_StealthBreak_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_StealthBreak_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"264567512\">Enemy_W4_Scholar_01_StealthBreak</a>[<span class=\"descriptionNumberColor\">Flawed</span>]",
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (MDF_StealthBreak_ActionDelayRatio) || RETURN",
                  "displayLines": "MDF_StealthBreak_ActionDelayRatio",
                  "constants": [],
                  "variables": [
                    "MDF_StealthBreak_ActionDelayRatio"
                  ]
                },
                "MDF_AllDamageTypeTakenRatio": {
                  "operator": "Variables[0] (MDF_StealthBreak_AllDamageTypeTakenRatio) || RETURN",
                  "displayLines": "MDF_StealthBreak_AllDamageTypeTakenRatio",
                  "constants": [],
                  "variables": [
                    "MDF_StealthBreak_AllDamageTypeTakenRatio"
                  ]
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Stealth"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Unselectable Adjustment [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1733989221\">TaskList_W4_Scholar_01_OnDieOrEscape</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "flagName": "Stealth",
                      "invertCondition": true
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_StealthBreak_ActionDelayRatio",
        "MDF_StealthBreak_AllDamageTypeTakenRatio"
      ],
      "latentQueue": [],
      "description": "Cannot become the primary target for abilities that require active selection. DMG received increases by <span class=\"descriptionNumberColor\">MDF_StealthBreak_AllDamageTypeTakenRatio</span>. When Weakness is Broken or when all enemy units on the field aside from this unit are in \"Lurking\" state, dispels \"Lurking\" state for this unit. When there are no other enemy units on the battlefield, this unit dispels the \"Lurking\" state.",
      "type": "Buff",
      "effectName": "Lurking",
      "statusName": "Lurking"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1296271884\">Enemy_W4_Scholar_01_ConfineHit_Controller</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_Confine"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                }
              ],
              "failed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}