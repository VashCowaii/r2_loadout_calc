const configAbility = {
  "fileName": "3003016_Monster_W3_Dinosaur_02_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "variableName": "CurrentLockCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "FlopSide",
      "value": -1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Theater_Rogue"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__116) || RETURN",
        "displayLines": "ENEMIES_OBJECT_UNUSED__116",
        "constants": [],
        "variables": [
          "ENEMIES_OBJECT_UNUSED__116"
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-206422488\">Enemy_W3_Dinosaur_02_Ability08_TVMark</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W3_TV_00"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "MonsterType_W3_TV_00"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-206422488\">Enemy_W3_Dinosaur_02_Ability08_TVMark</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "FlopSide",
                  "value": -1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Theater_Rogue"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"579019848\">MModifier_Monster_W3_TV_02_FaceLock</a>[<span class=\"descriptionNumberColor\">Tutoring</span>]"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentLockCount",
              "value": 1,
              "max": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__116) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__116",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__116"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"579019848\">MModifier_Monster_W3_TV_02_FaceLock</a>[<span class=\"descriptionNumberColor\">Tutoring</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentLockCount",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__116) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__116",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__116"
              ]
            }
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__116) || Variables[1] (CurrentLockCount) || SUB || RETURN",
                "displayLines": "(ENEMIES_OBJECT_UNUSED__116 - CurrentLockCount)",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__116",
                  "CurrentLockCount"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"579019848\">MModifier_Monster_W3_TV_02_FaceLock</a>[<span class=\"descriptionNumberColor\">Tutoring</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W3_TV_00"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Check Boolean Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "MonsterType_W3_TV_00"
                                }
                              }
                            ]
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-206422488\">Enemy_W3_Dinosaur_02_Ability08_TVMark</a>"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"579019848\">MModifier_Monster_W3_TV_02_FaceLock</a>[<span class=\"descriptionNumberColor\">Tutoring</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentLockCount",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__116) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__116",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__116"
              ]
            }
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__116) || Variables[1] (CurrentLockCount) || SUB || RETURN",
                "displayLines": "(ENEMIES_OBJECT_UNUSED__116 - CurrentLockCount)",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__116",
                  "CurrentLockCount"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"579019848\">MModifier_Monster_W3_TV_02_FaceLock</a>[<span class=\"descriptionNumberColor\">Tutoring</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-206422488\">Enemy_W3_Dinosaur_02_Ability08_TVMark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W3_TV_00"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Check Boolean Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "MonsterType_W3_TV_00"
                                }
                              }
                            ]
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-206422488\">Enemy_W3_Dinosaur_02_Ability08_TVMark</a>"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"579019848\">MModifier_Monster_W3_TV_02_FaceLock</a>[<span class=\"descriptionNumberColor\">Tutoring</span>]"
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-206422488\">Enemy_W3_Dinosaur_02_Ability08_TVMark</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-206422488\">Enemy_W3_Dinosaur_02_Ability08_TVMark</a>",
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    }
  ]
}