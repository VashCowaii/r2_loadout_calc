const compositeAbilityObject = {
  "fullCharacterName": "Pioneer Diver of Dead Waters",
  "trimCharacterName": "PioneerDiverofDeadWaters",
  "abilityList": [
    "PioneerDiverofDeadWaters_Ability51171",
    "PioneerDiverofDeadWaters_Ability51170"
  ],
  "abilityObject": {
    "PioneerDiverofDeadWaters_Ability51171": {
      "fileName": "PioneerDiverofDeadWaters_Ability51171",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_117_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_117_Sub[<span class=\"descriptionNumberColor\">Pioneer Diver of Dead Waters</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.04) || RETURN",
                    "displayLines": "0.04",
                    "constants": [],
                    "variables": [
                      0.04
                    ]
                  }
                }
              ]
            }
          ],
          "description": "The 4-piece set's CRIT Rate and CRIT DMG Boost effect are increased.",
          "type": "Other",
          "statusName": "Pioneer Diver of Dead Waters"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_117_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Target Receiving DMG",
                    "value1": "StatusCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Relic_117_Sub[<span class=\"descriptionNumberColor\">Pioneer Diver of Dead Waters</span>]"
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.12) || Constants[0] (2) || MUL || RETURN",
                            "displayLines": "(0.12 * 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              0.12
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.12) || RETURN",
                            "displayLines": "0.12",
                            "constants": [],
                            "variables": [
                              0.12
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Target Receiving DMG",
                        "value1": "StatusCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Owner of this Modifier",
                            "modifier": "Relic_117_Sub[<span class=\"descriptionNumberColor\">Pioneer Diver of Dead Waters</span>]"
                          },
                          "passed": [
                            {
                              "name": "Adjust Target Stats",
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                              "value": {
                                "operator": "Variables[0] (0.08) || Constants[0] (2) || MUL || RETURN",
                                "displayLines": "(0.08 * 2)",
                                "constants": [
                                  2
                                ],
                                "variables": [
                                  0.08
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Adjust Target Stats",
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                              "value": {
                                "operator": "Variables[0] (0.08) || RETURN",
                                "displayLines": "0.08",
                                "constants": [],
                                "variables": [
                                  0.08
                                ]
                              }
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
              "eventTrigger": "Apply Modifier [From Owner] (Success)",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      },
                      {
                        "name": "Compare: Modifier Status Type",
                        "statusType": "Debuff"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_117_Sub[<span class=\"descriptionNumberColor\">Pioneer Diver of Dead Waters</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
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
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases DMG dealt to enemies with debuffs by 12%.",
        "Increases CRIT Rate by 4%. The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs. After the wearer inflicts a debuff on enemy targets, the aforementioned effects increase by 100%, lasting for 1 turn(s)."
      ],
      "params": [
        [
          0.12
        ],
        [
          0.04,
          0.08,
          0.12,
          2,
          3,
          1
        ]
      ]
    },
    "PioneerDiverofDeadWaters_Ability51170": {
      "fileName": "PioneerDiverofDeadWaters_Ability51170",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_117_Main2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_117_DamageUp",
          "execute": [
            {
              "eventTrigger": "Deal Damage [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Target Receiving DMG",
                    "value1": "StatusCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "for": "Relic_117_Main2",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_117_DamageUp",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    }
                  }
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
        "Increases DMG dealt to enemies with debuffs by 12%.",
        "Increases CRIT Rate by 4%. The wearer deals 8%/12% increased CRIT DMG to enemies with at least 2/3 debuffs. After the wearer inflicts a debuff on enemy targets, the aforementioned effects increase by 100%, lasting for 1 turn(s)."
      ],
      "params": [
        [
          0.12
        ],
        [
          0.04,
          0.08,
          0.12,
          2,
          3,
          1
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {},
    "4": {
      "CritRateBase": 0.04
    }
  },
  "isLightcone": true,
  "isRelic": true
}