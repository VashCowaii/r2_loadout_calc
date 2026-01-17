const configAbility = {
  "fileName": "DanHeng_Modifiers",
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
      "for": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                      "value": "DanHeng_PassivePene"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(2 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "immediateEffect": true
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "CoolDown",
                      "bar#": 1,
                      "cooldown": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(2 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "immediateEffect": true
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "CoolDown",
                      "bar#": 1,
                      "cooldown": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
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
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(2 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "CoolDown",
                      "bar#": 1,
                      "cooldown": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(2 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "CoolDown",
                      "bar#": 1,
                      "cooldown": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "DanHeng_PassivePene"
      ],
      "latentQueue": [],
      "description": "Wind RES PEN +<span class=\"descriptionNumberColor\">DanHeng_PassivePene</span>.",
      "type": "Buff",
      "effectName": "Wind RES PEN",
      "statusName": "Superiority of Reach"
    },
    {
      "name": "Modifier Construction",
      "for": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 1,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "DanHeng_00_Passive_BeginTargetEnhance_CD",
              "modifierName": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DanHeng_00_Passive_BeginTargetEnhance_CD",
                "compareType": ">=",
                "value2": 0.5
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "CoolDown",
                  "bar#": 1,
                  "cooldown": {
                    "operator": "Variables[0] (DanHeng_00_Passive_BeginTargetEnhance_CD) || RETURN",
                    "displayLines": "DanHeng_00_Passive_BeginTargetEnhance_CD",
                    "constants": [],
                    "variables": [
                      "DanHeng_00_Passive_BeginTargetEnhance_CD"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The effect of Talent \"Superiority of Reach\" cannot be triggered.",
      "type": "Other",
      "statusName": "Superiority of Reach",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "The effect of Talent \"Superiority of Reach\" can now be triggered.",
      "type": "Other",
      "statusName": "Superiority of Reach"
    }
  ],
  "references": []
}