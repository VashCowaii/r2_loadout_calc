const compositeAbilityObject = {
  "fullCharacterName": "A Thankless Coronation",
  "trimCharacterName": "AThanklessCoronation",
  "abilityList": [
    "AThanklessCoronation_Ability23045"
  ],
  "abilityObject": {
    "AThanklessCoronation_Ability23045": {
      "fileName": "AThanklessCoronation_Ability23045",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23045_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23045_Bonus2[<span class=\"descriptionNumberColor\">King of Knights</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "King of Knights"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23045_Bonus[<span class=\"descriptionNumberColor\">King of Knights</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "King of Knights"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23045_Main",
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
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23045_Bonus[<span class=\"descriptionNumberColor\">King of Knights</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "_MSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_MSP",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (300) || RETURN",
                          "displayLines": "300",
                          "constants": [],
                          "variables": [
                            300
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": "Owner of this Modifier",
                          "valuePercent": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "LC_23045_Bonus2[<span class=\"descriptionNumberColor\">King of Knights</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.4) || RETURN",
                              "displayLines": "0.4",
                              "constants": [],
                              "variables": [
                                0.4
                              ]
                            }
                          }
                        }
                      ]
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
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. When using Ultimate, increases the wearer's ATK by #6[i]%, and if the wearer's Max Energy is greater than or equal to #3[i], regenerates a fixed amount of Energy equal to #5[i]% of the wearer's Max Energy and once again increases the wearer's ATK by #2[i]%, lasting for #4[i] turns.",
      "params": [
        [
          0.36,
          0.4,
          300,
          2,
          0.1,
          0.4
        ],
        [
          0.45,
          0.5,
          300,
          2,
          0.1,
          0.5
        ],
        [
          0.54,
          0.6,
          300,
          2,
          0.1,
          0.6
        ],
        [
          0.63,
          0.7,
          300,
          2,
          0.1,
          0.7
        ],
        [
          0.72,
          0.8,
          300,
          2,
          0.1,
          0.8
        ]
      ]
    }
  },
  "isLightcone": true
}