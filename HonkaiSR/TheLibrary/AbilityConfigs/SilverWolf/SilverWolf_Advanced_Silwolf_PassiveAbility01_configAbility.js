const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_PassiveAbility01",
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
      "modifier": "Advanced_Silwolf_Passive"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Generate"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Silwolf_00_AddModifier_LifeTime",
          "value": {
            "operator": "Variables[0] (3) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(3 + 1)",
            "constants": [],
            "variables": [
              3,
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Silwolf_00_AddModifier_LifeTime",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Side Note"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Advanced_Silwolf_Tree03_StatusProbabilityShow"
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
          "modifier": "Advanced_Silwolf_Eidolon1"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Advanced_Silwolf_Eidolon4"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "AITag",
          "variableName": "DamageCarry",
          "value": 1
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Eidolon4",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "_DebuffCountForRank04"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_DebuffCountForRank04",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (5) || RETURN",
                          "displayLines": "5",
                          "constants": [],
                          "variables": [
                            5
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_DebuffCountForRank04",
                          "value": {
                            "operator": "Variables[0] (5) || RETURN",
                            "displayLines": "5",
                            "constants": [],
                            "variables": [
                              5
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_DebuffCountForRank04",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (_DebuffCountForRank04) || RETURN",
                            "displayLines": "_DebuffCountForRank04",
                            "constants": [],
                            "variables": [
                              "_DebuffCountForRank04"
                            ]
                          },
                          "Event": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": "Use Prior Target(s) Defined",
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] (0.2) || RETURN",
                                  "displayLines": "0.2",
                                  "constants": [],
                                  "variables": [
                                    0.2
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              }
                            }
                          ]
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
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Eidolon1",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "_DebuffCountForRank01_sub"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DebuffCountForRank01",
                      "value": {
                        "operator": "Variables[0] (_DebuffCountForRank01) || Variables[1] (_DebuffCountForRank01_sub) || ADD || RETURN",
                        "displayLines": "(_DebuffCountForRank01 + _DebuffCountForRank01_sub)",
                        "constants": [],
                        "variables": [
                          "_DebuffCountForRank01",
                          "_DebuffCountForRank01_sub"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DebuffCountForRank01",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DebuffCountForRank01",
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (7) || Variables[1] (_DebuffCountForRank01) || MUL || RETURN",
                    "displayLines": "(7 * _DebuffCountForRank01)",
                    "constants": [],
                    "variables": [
                      7,
                      "_DebuffCountForRank01"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DebuffCountForRank01",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Passive",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Inject"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Silwolf_00_AddModifier_Chance",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": "Target Group(Attack List)",
              "maxTargets": 10,
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": "Caster",
                  "inherentTarget": "Use Prior Target(s) Defined",
                  "ability": "Advanced_Silwolf_PassiveAbility_RandomBug"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Inject"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (20) || RETURN",
                    "displayLines": "20",
                    "constants": [],
                    "variables": [
                      20
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
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
                  "name": "SWITCH",
                  "source": {
                    "name": "Damage Type Source",
                    "sourceType": "ReadTargetType",
                    "target": "First Character in Lineup (No Memosprites)"
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Physical",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TheFirstAvatarWeakType",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Fire",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TheFirstAvatarWeakType",
                          "value": 2
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Ice",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TheFirstAvatarWeakType",
                          "value": 4
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Thunder",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TheFirstAvatarWeakType",
                          "value": 8
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Wind",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TheFirstAvatarWeakType",
                          "value": 16
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Quantum",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TheFirstAvatarWeakType",
                          "value": 32
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Imaginary",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TheFirstAvatarWeakType",
                          "value": 64
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}