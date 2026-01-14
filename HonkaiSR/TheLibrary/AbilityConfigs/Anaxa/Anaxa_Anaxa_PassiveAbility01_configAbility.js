const configAbility = {
  "fileName": "Anaxa_Anaxa_PassiveAbility01",
  "childAbilityList": [
    "Anaxa_Anaxa_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Anaxa_PassiveAbility"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Anaxa_Passive_Mark_Property",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_PropertyRatio",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_PropertyRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Caster"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Main-Target",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK",
                        "Skill"
                      ],
                      "trigger": "State_Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK",
                        "Skill"
                      ],
                      "trigger": "State_Normal"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ],
      "description": "Anaxa deals <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> increased DMG to the target. Furthermore, after using Basic ATK or Skill on the target, he uses 1 additional instance of Skill on it.",
      "type": "Debuff",
      "effectName": "Qualitative Disclosure",
      "statusName": "Qualitative Disclosure"
    },
    {
      "name": "Modifier Construction",
      "for": "Anaxa_Passive_WeaknessListener",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Weakness Count",
              "target": "Owner of this Modifier",
              "target2": "Owner of this Modifier",
              "variable": "MDF_WeakCount",
              "context": "ContextModifier",
              "weaknessFilter": "All"
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Weakness Count",
              "target": "Owner of this Modifier",
              "target2": "Owner of this Modifier",
              "variable": "MDF_WeakCount",
              "context": "ContextModifier",
              "weaknessFilter": "All"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Weakness Count",
              "target": "Owner of this Modifier",
              "target2": "Owner of this Modifier",
              "variable": "MDF_WeakCount",
              "context": "ContextModifier",
              "weaknessFilter": "All"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "MDF_WeakCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_WeaknessNeed) || RETURN",
                  "displayLines": "MDF_WeaknessNeed",
                  "constants": [],
                  "variables": [
                    "MDF_WeaknessNeed"
                  ]
                },
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "Anaxa_Passive_Mark_Property",
                  "variableName": "MDF_PropertyRatio",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Weakness Count",
              "target": "Owner of this Modifier",
              "target2": "Owner of this Modifier",
              "variable": "MDF_WeakCount",
              "context": "ContextModifier",
              "weaknessFilter": "All"
            }
          ]
        },
        {
          "eventTrigger": "Weakness Implanted on Owner",
          "execute": [
            {
              "name": "Define Custom Variable with Weakness Count",
              "target": "Owner of this Modifier",
              "target2": "Owner of this Modifier",
              "variable": "MDF_WeakCount",
              "context": "ContextModifier",
              "weaknessFilter": "All"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_WeakCount",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (MDF_WeaknessNeed) || RETURN",
                "displayLines": "MDF_WeaknessNeed",
                "constants": [],
                "variables": [
                  "MDF_WeaknessNeed"
                ]
              },
              "maxValue": 9999,
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "Anaxa_Passive_Mark_Property",
                  "variableName": "MDF_PropertyRatio",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]"
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "Anaxa_Passive_Mark_Property",
                  "variableName": "MDF_PropertyRatio",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_Anaxa_InsertMainTargetMark",
      "stackType": "RetainGlobalLatest",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Anaxa_PassiveAbility",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": "Owner of this Modifier",
                    "target2": "Caster"
                  },
                  {
                    "name": "Compare: Target Count SUM",
                    "target": "All Hostile Entities (AOE)",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Roaming Signifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (30) || RETURN",
                    "displayLines": "30",
                    "constants": [],
                    "variables": [
                      30
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": 100
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "function_Anaxa_AddWeakness",
              "target": "Use Prior Target(s) Defined"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Skill Target List",
                    "modifier": "Anaxa_Passive_Mark[<span class=\"descriptionNumberColor\">Qualitative Disclosure</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "M_Anaxa_StartFreeBP",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Skill Target List",
                  "modifier": "M_Anaxa_InsertMainTargetMark"
                },
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
                  "castTarget": "Skill Target List",
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Anaxa_Passive_Mark_Property",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Anaxa_Passive_WeaknessListener",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_WeaknessNeed": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
              ]
            }
          }
        }
      ]
    }
  ]
}