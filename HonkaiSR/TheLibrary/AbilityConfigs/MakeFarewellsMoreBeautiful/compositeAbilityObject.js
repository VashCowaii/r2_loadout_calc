const compositeAbilityObject = {
  "fullCharacterName": "Make Farewells More Beautiful",
  "trimCharacterName": "MakeFarewellsMoreBeautiful",
  "abilityList": [
    "MakeFarewellsMoreBeautiful_Ability23040"
  ],
  "fixedStats": {
    "1": {
      "HP%": 0.3
    },
    "2": {
      "HP%": 0.375
    },
    "3": {
      "HP%": 0.45
    },
    "4": {
      "HP%": 0.525
    },
    "5": {
      "HP%": 0.6
    }
  },
  "abilityObject": {
    "MakeFarewellsMoreBeautiful_Ability23040": {
      "fileName": "MakeFarewellsMoreBeautiful_Ability23040",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23040_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23040_Sub[<span class=\"descriptionNumberColor\">Death Flower</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (LC_23040_PropertyValue) || INVERT || RETURN",
                    "displayLines": "-LC_23040_PropertyValue",
                    "constants": [],
                    "variables": [
                      "LC_23040_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">LC_23040_PropertyValue</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "Death Flower",
          "statusName": "Death Flower"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23040_Main02[<span class=\"descriptionNumberColor\">Death Flower</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceAddedRatio) || INVERT || RETURN",
                    "displayLines": "-MDF_DefenceAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "Death Flower",
          "statusName": "Death Flower",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster's Memosprite",
              "modifier": "LC_23040_Sub[<span class=\"descriptionNumberColor\">Death Flower</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "LC_23040_PropertyValue": {
                  "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                  "displayLines": "MDF_DefenceAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_DefenceAddedRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23040_Main",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Owner of this Modifier",
                        "target2": "Current Turn Owner"
                      },
                      {
                        "name": "Compare: Target",
                        "target": "[MEMOSPRITE OF] Owner of this Modifier",
                        "target2": "Current Turn Owner"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Ability23040_CD",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Memosprite"
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Use [SUMMONER OF] Prior Target(s) Defined",
                        "target2": "Owner of this Modifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Ability23040_HealFlag",
                        "compareType": "<",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": "Owner of this Modifier",
                      "advanceType": "Advance",
                      "value": "-0.12"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Ability23040_HealFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Target",
                                "target": "Owner of this Modifier",
                                "target2": "Use Prior Target(s) Defined"
                              },
                              {
                                "name": "Compare: Target",
                                "target": "[MEMOSPRITE OF] Owner of this Modifier",
                                "target2": "Use Prior Target(s) Defined"
                              }
                            ]
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Target",
                                "target": "Owner of this Modifier",
                                "target2": "Current Turn Owner"
                              },
                              {
                                "name": "Compare: Target",
                                "target": "[MEMOSPRITE OF] Owner of this Modifier",
                                "target2": "Current Turn Owner"
                              }
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "target": "Owner of this Modifier",
                            "value1": "Ability23040_CD",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "LC_23040_Main02[<span class=\"descriptionNumberColor\">Death Flower</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DefenceAddedRatio": {
                              "operator": "Variables[0] (0.3) || RETURN",
                              "displayLines": "0.3",
                              "constants": [],
                              "variables": [
                                0.3
                              ]
                            },
                            "MDF_LifeTime": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Ability23040_CD",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
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
                      "name": "Define Custom Variable",
                      "variableName": "Ability23040_HealFlag",
                      "value": 0
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
      "desc": "Increases the wearer's Max HP by #1[i]%. When the wearer or their memosprite loses HP during their own turn, the wearer gains \"Death Flower.\" \"Death Flower\" allows the wearer and their memosprite to ignore #2[i]% of the target's DEF when dealing DMG, lasting for #3[i] turn(s).\\nWhen the wearer's memosprite disappears, advances the wearer's action by #4[i]%. This effect can only trigger up to 1 time, and the trigger count resets every time the wearer uses Ultimate.",
      "params": [
        [
          0.3,
          0.3,
          2,
          0.12
        ],
        [
          0.375,
          0.35,
          2,
          0.15
        ],
        [
          0.45,
          0.4,
          2,
          0.18
        ],
        [
          0.525,
          0.45,
          2,
          0.21
        ],
        [
          0.6,
          0.5,
          2,
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}