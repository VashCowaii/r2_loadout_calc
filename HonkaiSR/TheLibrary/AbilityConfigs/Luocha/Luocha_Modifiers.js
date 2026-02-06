const configAbility = {
  "fileName": "Luocha_Modifiers",
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
      "for": "Luocha_Eidolon6_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Reunion With the Dust</span>]",
      "stackType": "ReplaceByCaster",
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
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "All-Type DMG RES -<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "Reunion With the Dust"
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Eidolon1_ATKUp[<span class=\"descriptionNumberColor\">Ablution of the Quick</span>]",
      "stackType": "ReplaceByCaster",
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
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [
        "_insertCheck_"
      ],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Ablution of the Quick"
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01_InsertMark",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Luocha_Passive01_DisableActionInsertMark"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_insertCheck_",
              "value": 1
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Luocha_Passive01_InsertAbility",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "AvatarBuffSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 2,
              "maximum": 2,
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 2
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_insertCheck_",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Luocha_Passive01_InsertAbility",
                  "priorityTag": "AvatarBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01Modifier[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "HeiyuanLayer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HeiyuanLayer",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_PassiveLayer) || RETURN",
                  "displayLines": "MDF_PassiveLayer",
                  "constants": [],
                  "variables": [
                    "MDF_PassiveLayer"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Luocha_Passive01_InsertMark"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (HeiyuanLayer) || RETURN",
                    "displayLines": "HeiyuanLayer",
                    "constants": [],
                    "variables": [
                      "HeiyuanLayer"
                    ]
                  },
                  "bar#": 2
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PassiveLayer"
      ],
      "latentQueue": [],
      "description": "When the Abyss Flower is fully stacked, Luocha can consume all the stacks to deploy a Zone against the enemy.",
      "type": "Other",
      "statusName": "Abyss Flower",
      "stackLimit": 2,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01_HealHPCD[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "stackData": [],
      "latentQueue": [
        "IsInserAbilityTrigger"
      ],
      "description": "Skill effect auto-trigger is on cooldown.",
      "type": "Other",
      "statusName": "Prayer of Abyss Flower",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Ability02_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                "displayLines": "MDF_ShieldValue",
                "constants": [],
                "variables": [
                  "MDF_ShieldValue"
                ]
              },
              "valuePercent": {
                "operator": "Variables[0] (MDF_ShieldPercentage) || RETURN",
                "displayLines": "MDF_ShieldPercentage",
                "constants": [],
                "variables": [
                  "MDF_ShieldPercentage"
                ]
              },
              "formula": "ATK Scaling (Shield)"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_ShieldPercentage",
        "MDF_ShieldValue"
      ],
      "latentQueue": [],
      "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
      "type": "Buff",
      "effectName": "Shield",
      "statusName": "Shield"
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Ability02_AddHealRatio",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Heal Target Start [Owner]",
          "execute": [
            {
              "name": "Adjust Target Healing Stats",
              "on": "Healer",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AddHealRatio) || RETURN",
                "displayLines": "MDF_AddHealRatio",
                "constants": [],
                "variables": [
                  "MDF_AddHealRatio"
                ]
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_AddHealRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Luocha_Passive01_DisableActionInsertMark",
      "execute": [
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Luocha_Passive01_InsertMark"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "IsInserAbilityTrigger"
      ]
    }
  ],
  "references": []
}