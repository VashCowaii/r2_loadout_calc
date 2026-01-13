const compositeAbilityObject = {
  "fullCharacterName": "The Day The Cosmos Fell",
  "trimCharacterName": "TheDayTheCosmosFell",
  "abilityList": [
    "TheDayTheCosmosFell_Ability21040"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.16
    },
    "2": {
      "ATK%": 0.18
    },
    "3": {
      "ATK%": 0.2
    },
    "4": {
      "ATK%": 0.22
    },
    "5": {
      "ATK%": 0.24
    }
  },
  "abilityObject": {
    "TheDayTheCosmosFell_Ability21040": {
      "fileName": "TheDayTheCosmosFell_Ability21040",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21040_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21040_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          ],
          "description": "Increase CRIT DMG by <span class=\"descriptionNumberColor\">#SkillEquip_P2_CriticalDamage</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "CRIT DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21040_Main",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "WeakEnemyCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_21040",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Fire"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Fire"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Thunder"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Thunder"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Physical"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Physical"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Wind"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Wind"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Quantum"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Quantum"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Ice"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Ice"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Imaginary"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": "Use Prior Target(s) Defined",
                            "DamageType": "Imaginary"
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "WeakEnemyCount",
                      "value": {
                        "operator": "Variables[0] (WeakEnemyCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(WeakEnemyCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "WeakEnemyCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "WeakEnemyCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Flag_21040",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "LC_21040_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
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
                              "name": "Define Custom Variable",
                              "variableName": "Flag_21040",
                              "value": 1
                            }
                          ]
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
      "desc": "Increases the wearer's ATK by #1[i]%. When the wearer uses an attack and at least 2 attacked enemies have the corresponding Weakness, the wearer's CRIT DMG increases by #2[i]%, lasting for #3[i] turn(s).",
      "params": [
        [
          0.16,
          0.2,
          2
        ],
        [
          0.18,
          0.25,
          2
        ],
        [
          0.2,
          0.3,
          2
        ],
        [
          0.22,
          0.35,
          2
        ],
        [
          0.24,
          0.4,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}