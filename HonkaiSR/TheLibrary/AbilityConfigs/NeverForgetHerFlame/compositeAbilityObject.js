const compositeAbilityObject = {
  "fullCharacterName": "Never Forget Her Flame",
  "trimCharacterName": "NeverForgetHerFlame",
  "abilityList": [
    "NeverForgetHerFlame_Ability23050"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.6
    },
    "2": {
      "DamageBreak": 0.75
    },
    "3": {
      "DamageBreak": 0.9
    },
    "4": {
      "DamageBreak": 1.05
    },
    "5": {
      "DamageBreak": 1.2
    }
  },
  "abilityObject": {
    "NeverForgetHerFlame_Ability23050": {
      "fileName": "NeverForgetHerFlame_Ability23050",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23050_Main",
          "valuePerStack": {
            "MDF_BreakRatioIncrease": {
              "operator": "Variables[0] (0.32) || RETURN",
              "displayLines": "0.32",
              "constants": [],
              "variables": [
                0.32
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23050_SubTriggerControl",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
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
          "name": "Modifier Construction",
          "for": "LC_23050_Main",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_23050_Sub[<span class=\"descriptionNumberColor\">Immolation</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_BreakRatioIncrease) || RETURN",
                          "displayLines": "MDF_BreakRatioIncrease",
                          "constants": [],
                          "variables": [
                            "MDF_BreakRatioIncrease"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": "All Teammates + Unselectable (Excluding Owner)",
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_TriggerBattleCharacter"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "LC_23050_Sub[<span class=\"descriptionNumberColor\">Immolation</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_BreakRatioIncrease) || RETURN",
                              "displayLines": "MDF_BreakRatioIncrease",
                              "constants": [],
                              "variables": [
                                "MDF_BreakRatioIncrease"
                              ]
                            }
                          }
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Teammates + Unselectable (Excluding Owner) [Sort by Break Effect][Reverse][1]",
                          "modifier": "LC_23050_Sub[<span class=\"descriptionNumberColor\">Immolation</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_BreakRatioIncrease) || RETURN",
                              "displayLines": "MDF_BreakRatioIncrease",
                              "constants": [],
                              "variables": [
                                "MDF_BreakRatioIncrease"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "When Stacking/Receiving Weaknesses",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "LC_23050_SubTriggerControl"
                  },
                  "failed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23050_SubTriggerControl"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_BreakRatioIncrease"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23050_Sub[<span class=\"descriptionNumberColor\">Immolation</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakMulti</span>&nbsp;",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Increases Break DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Break DMG Boost",
          "statusName": "Immolation"
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Break Effect by #1[i]%. When entering combat, increases Break DMG dealt by the wearer and another teammate who triggered combat by #2[i]%. If there is no teammate who triggered combat, applies this effect to the wearer and the teammate with the highest Break Effect. Effects of the same type cannot be stacked. When the wearer applies Weakness to an enemy target, recovers 1 Skill Point. This effect can only trigger once. And resets this trigger count when using Ultimate.",
      "params": [
        [
          0.6,
          0.32
        ],
        [
          0.75,
          0.42
        ],
        [
          0.9,
          0.52
        ],
        [
          1.05,
          0.62
        ],
        [
          1.2,
          0.72
        ]
      ]
    }
  },
  "isLightcone": true
}