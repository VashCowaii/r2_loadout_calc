const configAbility = {
  "fileName": "Lynx_Lynx_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Advance Surveying"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Lynx_Tree01_Listen"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Exploration Techniques"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Lynx_Tree02_Resistance",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.35) || RETURN",
              "displayLines": "0.35",
              "constants": [],
              "variables": [
                0.35
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Lynx_Eidolon1_ListenBeforeDealHeal01"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Lynx_Eidolon1_ListenBeforeDealHeal02",
      "execute": [
        {
          "eventTrigger": "Heal Target Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_Target_HpRatio) || RETURN",
                  "displayLines": "MDF_Target_HpRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Target_HpRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_Eidolon1_ListenBeforeDealHeal01",
      "modifierFlags": [
        "MuteDotCasterCallBack"
      ],
      "execute": [
        {
          "eventTrigger": "Heal Target Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Snapshot(Calculation Instance Completed)",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Lynx_Eidolon1_ListenBeforeDealHeal02",
              "valuePerStack": {
                "MDF_Target_HpRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_Tree01_Listen",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context)",
              "modifier": "Lynx_Tree01_OnBeforeBeingAttacked",
              "valuePerStack": {
                "MDF_Lynx_PointB1_AddSpValue": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Lynx_Tree01_OnBeforeBeingAttacked",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Lynx_Tree01_OnBeforeBeingAttacked",
                  "valuePerStack": {
                    "MDF_Lynx_PointB1_AddSpValue": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}