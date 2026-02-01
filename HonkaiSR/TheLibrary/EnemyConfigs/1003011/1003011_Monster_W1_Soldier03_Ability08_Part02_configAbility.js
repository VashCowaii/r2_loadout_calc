const configAbility = {
  "fileName": "1003011_Monster_W1_Soldier03_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 1003011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Silvermane Lieutenant (Bug)"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_SummonCounter",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "Last"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_SummonCounter",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "location": "Right"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID02",
                          "summonLocation": "Last"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID02",
                          "summonLocation": "First"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_SummonCounter",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID02",
                          "summonLocation": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID02",
                          "summonLocation": "Last"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_SummonCounter",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "location": "Right"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "Last"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.7,
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "First"
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
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_SummonCounter",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID01",
                          "summonLocation": "Last"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_SummonCounter",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "location": "Right"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID02",
                          "summonLocation": "Last"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "refreshPositions": false,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonID02",
                          "summonLocation": "First"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}