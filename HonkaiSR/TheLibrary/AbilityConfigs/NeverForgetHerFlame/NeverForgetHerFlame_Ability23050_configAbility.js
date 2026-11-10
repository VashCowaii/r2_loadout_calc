const configAbility = {
  "fileName": "NeverForgetHerFlame_Ability23050",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-345651043\">LC_23050_Main</a>",
      "valuePerStack": {
        "MDF_BreakRatioIncrease": {
          "displayLines": "0.32"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1087896711\">LC_23050_SubTriggerControl</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-345651043\">LC_23050_Main</a>",
      "stackData": [
        "MDF_BreakRatioIncrease"
      ],
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"503983570\">LC_23050_Sub</a>[<span class=\"descriptionNumberColor\">Immolation</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_BreakRatioIncrease"
                    }
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_TriggerBattleCharacter"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"503983570\">LC_23050_Sub</a>[<span class=\"descriptionNumberColor\">Immolation</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_BreakRatioIncrease"
                        }
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}.[[sortByBreakEffect]].[[reverse]].[[index0]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"503983570\">LC_23050_Sub</a>[<span class=\"descriptionNumberColor\">Immolation</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_BreakRatioIncrease"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Applying Weaknesses",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1087896711\">LC_23050_SubTriggerControl</a>"
              },
              "failed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "displayLines": "1"
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1087896711\">LC_23050_SubTriggerControl</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__503983570\">LC_23050_Sub</a>[<span class=\"descriptionNumberColor\">Immolation</span>]",
      "stackType": "Replace",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "Increases Break DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Break DMG Boost",
      "statusName": "Immolation",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakMulti</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
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