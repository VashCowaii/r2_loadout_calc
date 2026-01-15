const configAbility = {
  "fileName": "TheDahlia_Modifiers",
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
      "for": "_M_Constance_InsertCheck",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Constance_InsertRetargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Constance_InsertRetargetSelf"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Constance_InsertRetargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Constance_InsertRetargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster",
                    "invertCondition": true
                  },
                  {
                    "name": "Living State",
                    "state": "Mask_AliveOrRevivable",
                    "target": "Caster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Constance_InsertRetargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Constance_InsertRetargetSelf",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": "Caster"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Constance_Insert_SelectTarget",
                  "abilitySource": "Caster",
                  "abilityTarget": "All Hostile Entities (AOE)",
                  "priorityTag": "AvatarInsertAttackSelf",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_InsertCD[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "Constance_Aura[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]"
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Active",
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal",
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ],
          "priorityLevel": 100
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "CoolDown",
              "cooldown": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Talent's Follow-Up ATK cannot be triggered yet.",
      "type": "Other",
      "statusName": "Who's Afraid of Constance?"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness_Sub_Imaginary",
      "stackType": "EntityUnique",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness_Sub_Quantum",
      "stackType": "EntityUnique",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Quantum"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness_Sub_Wind",
      "stackType": "EntityUnique",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Wind"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness_Sub_Thunder",
      "stackType": "EntityUnique",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Thunder"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness_Sub_Ice",
      "stackType": "EntityUnique",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Ice"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness_Sub_Fire",
      "stackType": "EntityUnique",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Fire"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness_Sub_Physical",
      "stackType": "EntityUnique",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Physical"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Wilt</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness",
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
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "_T_Constance_RefreshWeakness"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Constance_RefreshWeakness"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "_T_Constance_RefreshWeakness",
          "parse": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Ultimate_Weakness_Sub_Physical",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Ultimate_Weakness_Sub_Fire",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Ultimate_Weakness_Sub_Ice",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Ultimate_Weakness_Sub_Thunder",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Ultimate_Weakness_Sub_Wind",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Ultimate_Weakness_Sub_Quantum",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Ultimate_Weakness_Sub_Imaginary",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Find New Target",
              "from": "Dahlia's Dance Partners",
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "SWITCH",
                  "source": {
                    "name": "Damage Type Source",
                    "sourceType": "ReadTargetType",
                    "target": "Use Prior Target(s) Defined"
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Physical",
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_Ultimate_Weakness_Sub_Physical",
                          "silentAdd": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Fire",
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_Ultimate_Weakness_Sub_Fire",
                          "silentAdd": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Ice",
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_Ultimate_Weakness_Sub_Ice",
                          "silentAdd": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Thunder",
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_Ultimate_Weakness_Sub_Thunder",
                          "silentAdd": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Wind",
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_Ultimate_Weakness_Sub_Wind",
                          "silentAdd": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Quantum",
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_Ultimate_Weakness_Sub_Quantum",
                          "silentAdd": true
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Imaginary",
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_Ultimate_Weakness_Sub_Imaginary",
                          "silentAdd": true
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. Gains Weaknesses of all Dance Partners' Types.",
      "type": "Debuff",
      "effectName": "Wilt",
      "statusName": "Wilt"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Aura_OnEnemy[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
      "modifierFlags": [
        "STAT_ForceSuperBreakDamage"
      ],
      "description": "Toughness Reduction taken when not Weakness Broken can also be converted to Super Break DMG.",
      "type": "Debuff",
      "statusName": "Lick... Enkindled Betrayal"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Aura[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Aura_Lifetime) || RETURN",
                "displayLines": "MDF_Aura_Lifetime",
                "constants": [],
                "variables": [
                  "MDF_Aura_Lifetime"
                ]
              },
              "priorState": "Active"
            },
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "BPSkillPriority",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "priorState": "Normal"
            },
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "BPSkillPriority",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_Aura_Lifetime",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Aura_Lifetime) || RETURN",
                    "displayLines": "MDF_Aura_Lifetime",
                    "constants": [],
                    "variables": [
                      "MDF_Aura_Lifetime"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_Aura_Lifetime",
                    "compareType": "<=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Toughness Reduction taken by enemy targets that are not Weakness Broken can also be converted to Super Break DMG.",
      "type": "Buff",
      "statusName": "Lick... Enkindled Betrayal",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Constance_Aura_OnEnemy[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
          "aliveOnly": "False",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Teammates + Unselectable (Excluding Owner)",
          "modifier": "Constance_Aura_OnTeam[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
          "refModifier": "MReference_StanceBreakAddedRatio",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}