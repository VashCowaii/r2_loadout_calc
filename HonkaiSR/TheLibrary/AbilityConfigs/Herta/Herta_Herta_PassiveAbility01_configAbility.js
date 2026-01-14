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
      "to": "Caster",
      "modifier": "Herta_Passive"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Herta_Count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Scoring_Herta_Count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Herta_Skill01_Count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Herta_Count_ATK",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Herta_Count_Insert",
      "value": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Herta_Passive",
      "execute": [
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Use Prior Target(s) Defined",
              "variableName": "MDF_MaxHP",
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
                  "variableName": "Herta_Count_ATK",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Herta_Count_Insert",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": "Use Prior Target(s) Defined",
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
                        "target": "Use Secondary Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Target Is Hostile",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Use Prior Target(s) Defined",
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
                        "condition": {
                          "name": "Has Flag",
                          "target": "Caster",
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
                        "target": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Herta_Passive_ATK"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": "Use Prior Target(s) Defined",
                          "scope": "TargetEntity",
                          "variableName": "MAvatar_Herta_Passive_CoolDown",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Herta_Count",
                          "value": {
                            "operator": "Variables[0] (Herta_Count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Herta_Count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Herta_Count"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Herta_Count",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Scoring_Herta_Count",
                          "value": 0
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Use Prior Target(s) Defined",
                      "scope": "TargetEntity",
                      "variableName": "MAvatar_Herta_Passive_CoolDown",
                      "value": 1
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
                    "target": "Use Prior Target(s) Defined",
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
                  "target": "Use Prior Target(s) Defined",
                  "scope": "TargetEntity",
                  "variableName": "MAvatar_Herta_Passive_CoolDown"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Herta_Count",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Scoring_Herta_Count",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Herta_Count_ATK",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Herta_Passive_ATK"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}