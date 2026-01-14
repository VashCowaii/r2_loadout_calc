const configAbility = {
  "fileName": "Archer_Modifiers",
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
      "for": "Archer_BonusTrigger[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Archer_BonusAbility02Ready"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill02UseCountInCaps",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InBonus",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "QueuedUltimates",
                    "compareType": "=",
                    "value2": 0,
                    "includeInjectedActions": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "QueuedActions",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Flag_HaveOtherAction",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Flag_HaveOtherAction",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "CurrentSkillPoints",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_BPNeed) || RETURN",
                      "displayLines": "MDF_BPNeed",
                      "constants": [],
                      "variables": [
                        "MDF_BPNeed"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Skill02UseCountInCaps",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_AlreadyInBonusAction",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Archer_BonusAbility02Ready"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_IsWindfurySkill",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Archer_Bonus",
                      "skillType": "ControlSkill02",
                      "canInjectUltimates": true,
                      "followSameTagAsAction": true,
                      "target": "Owner of this Modifier",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_InBonus",
                          "value": 0
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InBonus",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AlreadyInBonusAction",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_Flag_HaveOtherAction",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Next Extra Turn Is",
                            "target": "Owner of this Modifier",
                            "actionType": "Normal"
                          },
                          {
                            "name": "Next Extra Turn Is",
                            "invertCondition": true,
                            "tag": "Archer_Bonus"
                          },
                          {
                            "name": "Next Extra Turn Is",
                            "invertCondition": true,
                            "tag": "ActionTag_Windfury"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Skill02UseCountInCaps",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (5) || RETURN",
                              "displayLines": "5",
                              "constants": [],
                              "variables": [
                                5
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_IsWindfurySkill",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_AlreadyInBonusAction"
      ],
      "description": "After using Skill, if there are sufficient Skill Points to use it again, the turn will not end.",
      "type": "Other",
      "effectName": "Circuit Connection",
      "statusName": "Circuit Connection"
    },
    {
      "name": "Modifier Construction",
      "for": "Archer_BonusAbility02Ready",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "skillSlot": "Basic ATK",
              "enableSecondaryType": "ControlSkill04"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": "Owner of this Modifier",
              "abilityTypes": [
                "Basic ATK"
              ]
            },
            {
              "name": "Update Ability Binding",
              "target": "Caster",
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill04"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_AlreadyInBonusAction",
        "MDF_InBonus",
        "MDF_Flag_HaveOtherAction",
        "MDF_IsWindfurySkill"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill02ExtraCount",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "(MDF_Skill02ExtraCount * MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Skill02ExtraCount",
              "multiplier": 1
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "MDF_AlreadyInBonusAction",
        "MDF_IsWindfurySkill"
      ],
      "description": "Each stack increases DMG dealt by Skill by <span class=\"descriptionNumberColor\">#Skill02_P2_ExtraDamage</span>.",
      "type": "Buff",
      "effectName": "Enhanced Skill",
      "statusName": "Circuit Connection"
    },
    {
      "name": "Modifier Construction",
      "for": "Archer_Eidolon2_AddWeak[<span class=\"descriptionNumberColor\">The Unfulfilled Happiness</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Implant Weaknesses",
              "target": "Owner of this Modifier",
              "element": "Quantum",
              "resReduction": {
                "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                "displayLines": "-MDF_PropertyValue",
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
      "description": "Additionally implanted Quantum Weakness. Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implanted Quantum Weakness",
      "statusName": "The Unfulfilled Happiness"
    },
    {
      "name": "Modifier Construction",
      "for": "Archer_Insert_Target",
      "stackData": [],
      "latentQueue": [
        "MDF_InsertUsed",
        "MDF_HasMainTarget",
        "OnInsertAbort_Flg"
      ]
    }
  ],
  "references": []
}