const configAbility = {
  "fileName": "Herta_Herta_PassiveAbility01",
  "childAbilityList": [
    "Herta_Herta_PassiveAbility01",
    "Herta_Herta_Passive1Atk_Ability_Camera",
    "Herta_Herta_PassiveAtkReady_Ability"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 5,
  "toughnessList": [
    0,
    5,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1179391648\">Herta_Passive</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Herta_Count"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Scoring_Herta_Count"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Herta_Skill01_Count"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Herta_Count_ATK"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Herta_Count_Insert"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1179391648\">Herta_Passive</a>",
      "execute": [
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_MaxHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Herta_Count_Insert",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Herta_Count_ATK"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Herta_Count_Insert"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.5) || MUL || RETURN",
                  "displayLines": "(MDF_MaxHP * 0.5)",
                  "constants": [],
                  "variables": [
                    "MDF_MaxHP",
                    0.5
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Target Is Hostile",
                        "targetRelative1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "targetRelative2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "MAvatar_Herta_Passive_CoolDown",
                        "compareType": "=",
                        "value2": {
                          "operator": "Constants[0] (0) || RETURN",
                          "displayLines": "0",
                          "constants": [
                            0
                          ],
                          "variables": []
                        }
                      },
                      {
                        "name": "NOT",
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "flagName": "STAT_CTRL"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MAvatar_Herta_Passive_CoolDown",
                          "resetValue": 1,
                          "scope": "TargetEntity"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "operator": "Variables[0] (Herta_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Herta_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Herta_Count"
                            ]
                          },
                          "variableName": "Herta_Count"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Herta_Count"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Scoring_Herta_Count"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MAvatar_Herta_Passive_CoolDown",
                      "resetValue": 1,
                      "scope": "TargetEntity"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.5) || MUL || RETURN",
                      "displayLines": "(MDF_MaxHP * 0.5)",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHP",
                        0.5
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MAvatar_Herta_Passive_CoolDown",
                  "scope": "TargetEntity"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Herta_Count"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Scoring_Herta_Count"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Herta_Count_ATK"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-256958111\">Herta_Passive_ATK</a>"
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