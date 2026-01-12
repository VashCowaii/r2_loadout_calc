const configAbility = {
  "fileName": "Anaxa_Modifiers",
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
      "for": "M_Anaxa_StartFreeBP",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Multiply(by 0 if undefined)"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Properties",
              "propertyList": [
                {
                  "name": "Ability Property Action",
                  "propertyName": "Skill Point Cost",
                  "propertyAction": "Reset to Default"
                }
              ]
            }
          ]
        }
      ],
      "removalDependencies": {
        "name": "Removal Dependency",
        "dependancyName": "M_Anaxa_PrepareFreeBP"
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Anaxa_PrepareFreeBP",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "M_Anaxa_StartFreeBP"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "M_Anaxa_StartFreeBP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "M_Anaxa_PrepareFreeBP",
                  "addStacksPerTrigger": -1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Anaxa_Passive"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "M_Anaxa_StartFreeBP"
                },
                {
                  "name": "UI Display Event",
                  "popUpText": "Tetrad Wisdom Reigns Thrice"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "stackLimit": 99999
    },
    {
      "name": "Modifier Construction",
      "for": "M_Anaxa_InsertActionCheck",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Anaxa_InsertRetarget"
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
              "functionName": "Anaxa_InsertRetarget"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Anaxa_InsertRetarget"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Anaxa_InsertRetarget"
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
                  "functionName": "Anaxa_InsertRetarget"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Anaxa_InsertRetarget",
          "parse": [
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)",
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Target Exists",
                "target": "Use Prior Target(s) Defined",
                "living": true
              },
              "ifTargetFound": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_Anaxa_PrepareFreeBP",
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Anaxa_Passive",
                      "skillType": "ControlSkill02",
                      "forceAction": true,
                      "castTarget": "Use Prior Target(s) Defined",
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "M_Anaxa_PrepareFreeBP",
                          "addStacksPerTrigger": -1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "M_Anaxa_InsertActionCheck",
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "ignoreCost": true
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "stackLimit": 99999
    },
    {
      "name": "Modifier Construction",
      "for": "Anaxa_UltraDebuff[<span class=\"descriptionNumberColor\">Sublimation</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "MDF_HaveCTRLResistance",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": "Owner of this Modifier",
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "MDF_HaveCTRLResistance",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "priorityLevel": 200
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Flag Resistance",
              "target": "Owner of this Modifier",
              "variableName": "MDF_HaveCTRLResistance",
              "context": "ContextModifier",
              "flagName": "STAT_CTRL"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_HaveCTRLResistance",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "Endurance",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Unable to take action. Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses are added at the same time."
                },
                {
                  "name": "Add Flags to Modifier",
                  "target": "Owner of this Modifier",
                  "flagName": [
                    "DisableAction",
                    "STAT_CTRL",
                    "STAT_CTRL_Frozen_Effect",
                    "FixedPerformTime"
                  ],
                  "modifierName": "Anaxa_UltraDebuff[<span class=\"descriptionNumberColor\">Sublimation</span>]",
                  "casterFilter": "Caster"
                }
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Physical"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Fire"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Thunder"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Ice"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Wind"
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": "Owner of this Modifier",
              "action": "Attach",
              "valueList": [
                "Quantum"
              ]
            },
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses are added at the same time.",
      "type": "Debuff",
      "effectName": "Sublimation",
      "statusName": "Sublimation"
    }
  ],
  "references": []
}