const configAbility = {
  "fileName": "SilverWolf_Advanced_Silwolf_PassiveAbility01",
  "childAbilityList": [
    "SilverWolf_Advanced_Silwolf_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1496157762\">Advanced_Silwolf_Passive</a>"
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
          "value": {
            "operator": "Variables[0] (3) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(3 + 1)",
            "constants": [],
            "variables": [
              3,
              1
            ]
          },
          "variableName": "MDF_Silwolf_00_AddModifier_LifeTime"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "variableName": "MDF_Silwolf_00_AddModifier_LifeTime"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1562790381\">Advanced_Silwolf_Tree03_StatusProbabilityShow</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-204094420\">Advanced_Silwolf_Eidolon1</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-254427277\">Advanced_Silwolf_Eidolon4</a>"
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
          "value": 1,
          "variableName": "DamageCarry"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-254427277\">Advanced_Silwolf_Eidolon4</a>",
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
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
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
                          "value": {
                            "operator": "Variables[0] (5) || RETURN",
                            "displayLines": "5",
                            "constants": [],
                            "variables": [
                              5
                            ]
                          },
                          "variableName": "_DebuffCountForRank04"
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
                          "execute": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-204094420\">Advanced_Silwolf_Eidolon1</a>",
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
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_DebuffCountForRank01_sub"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "operator": "Variables[0] (_DebuffCountForRank01) || Variables[1] (_DebuffCountForRank01_sub) || ADD || RETURN",
                        "displayLines": "(_DebuffCountForRank01 + _DebuffCountForRank01_sub)",
                        "constants": [],
                        "variables": [
                          "_DebuffCountForRank01",
                          "_DebuffCountForRank01_sub"
                        ]
                      },
                      "variableName": "_DebuffCountForRank01"
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
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "variableName": "_DebuffCountForRank01"
                    }
                  ]
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                  "value": 0,
                  "variableName": "_DebuffCountForRank01"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1496157762\">Advanced_Silwolf_Passive</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "variableName": "MDF_Silwolf_00_AddModifier_Chance"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Attack Targets}}"
              },
              "maxTargets": 10,
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Advanced_Silwolf_PassiveAbility_RandomBug"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                    "readTarget": {
                      "name": "Target Name",
                      "target": "{{Far Left Player Entity(no Memosprite)}}"
                    }
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Physical",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "_TheFirstAvatarWeakType"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Fire",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": 2,
                          "variableName": "_TheFirstAvatarWeakType"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Ice",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": 4,
                          "variableName": "_TheFirstAvatarWeakType"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Thunder",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": 8,
                          "variableName": "_TheFirstAvatarWeakType"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Wind",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": 16,
                          "variableName": "_TheFirstAvatarWeakType"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Quantum",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": 32,
                          "variableName": "_TheFirstAvatarWeakType"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": "Imaginary",
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": 64,
                          "variableName": "_TheFirstAvatarWeakType"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}