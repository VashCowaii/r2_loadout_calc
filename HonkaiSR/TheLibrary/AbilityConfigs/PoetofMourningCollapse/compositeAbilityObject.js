const compositeAbilityObject = {
  "fullCharacterName": "Poet of Mourning Collapse",
  "trimCharacterName": "PoetofMourningCollapse",
  "abilityList": [
    "PoetofMourningCollapse_Ability51241"
  ],
  "abilityObject": {
    "PoetofMourningCollapse_Ability51241": {
      "fileName": "PoetofMourningCollapse_Ability51241",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_124_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_124_Sub[<span class=\"descriptionNumberColor\">Poet of Mourning Collapse</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Part Of",
                        "of": "Use [SUMMONER OF] Prior Target(s) Defined",
                        "target": "Caster",
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster (Memosprite)",
                      "modifier": "Relic_124_Sub[<span class=\"descriptionNumberColor\">Poet of Mourning Collapse</span>]",
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
              ]
            }
          ],
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Poet of Mourning Collapse"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_124_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": "Owner of this Modifier",
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (95) || RETURN",
                      "displayLines": "95",
                      "constants": [],
                      "variables": [
                        95
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Relic_124_Sub[<span class=\"descriptionNumberColor\">Poet of Mourning Collapse</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.32) || RETURN",
                          "displayLines": "0.32",
                          "constants": [],
                          "variables": [
                            0.32
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster (Memosprite)",
                      "modifier": "Relic_124_Sub[<span class=\"descriptionNumberColor\">Poet of Mourning Collapse</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
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
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Ability Value",
                        "target": "Owner of this Modifier",
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (110) || RETURN",
                          "displayLines": "110",
                          "constants": [],
                          "variables": [
                            110
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Relic_124_Sub[<span class=\"descriptionNumberColor\">Poet of Mourning Collapse</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster (Memosprite)",
                          "modifier": "Relic_124_Sub[<span class=\"descriptionNumberColor\">Poet of Mourning Collapse</span>]",
                          "valuePerStack": {
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
      "isRelic": true,
      "desc": [
        "Increases Quantum DMG by 10%.",
        "Decreases the wearer's SPD by 8%. Before entering battle, if the wearer's SPD is lower than 110/95, increases the wearer's CRIT Rate by 20%/32%. This effect applies to the wearer's memosprite at the same time."
      ],
      "params": [
        [
          0.1
        ],
        [
          -0.08,
          110,
          95,
          0.2,
          0.32,
          0.08
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "DamageQuantum": 0.1
    },
    "4": {
      "SPD%": -0.08
    }
  },
  "isLightcone": true,
  "isRelic": true
}