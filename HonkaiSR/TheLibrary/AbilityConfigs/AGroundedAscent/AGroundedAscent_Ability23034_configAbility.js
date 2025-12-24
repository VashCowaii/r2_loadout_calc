const configAbility = {
  "fileName": "AGroundedAscent_Ability23034",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23034_Main"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23034_Sub2[<span class=\"descriptionNumberColor\">Departing Anew</span>]"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23034_Sub2[<span class=\"descriptionNumberColor\">Departing Anew</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "\"Departing Anew\"'s Skill Point recovery effect cannot be triggered.",
      "type": "Other",
      "statusName": "Departing Anew"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23034_Sub[<span class=\"descriptionNumberColor\">Hymn</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (_Layer) || Variables[1] (0.15) || MUL || RETURN",
                "displayLines": "(_Layer * 0.15)",
                "constants": [],
                "variables": [
                  "_Layer",
                  0.15
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>, up to <span class=\"descriptionNumberColor\">#SkillEquip_P3_MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "Hymn",
      "statusName": "Hymn",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23034_Main",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LightTeam",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": "Skill Target List",
                  "searchRandom": true,
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LightTeam",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count",
                        "target": "Skill Target List",
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_LightTeam",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Target Count",
                            "target": "Skill Sub-Target List",
                            "compareType": "=",
                            "value2": 0,
                            "livingTargets": true
                          },
                          {
                            "name": "Character ID",
                            "ID": 1313,
                            "target": "Caster",
                            "characterName": "Sunday"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1313,
                        "target": "Caster",
                        "characterName": "Sunday"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Skill Target List + Memosprites",
                          "modifier": "LC_23034_Sub[<span class=\"descriptionNumberColor\">Hymn</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Skill Target List",
                          "modifier": "LC_23034_Sub[<span class=\"descriptionNumberColor\">Hymn</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "stackLimit": {
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
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (6) || RETURN",
                        "displayLines": "6",
                        "constants": [],
                        "variables": [
                          6
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Times",
                      "value": {
                        "operator": "Variables[0] (MDF_Times) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Times + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Times"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Times",
                        "compareType": "=",
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
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Times",
                          "value": 0
                        },
                        {
                          "name": "Skill Points Modification",
                          "adjustmentValue": 1,
                          "adjustmentType": "+"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Times",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                          "displayLines": "(2 - 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "LC_23034_Sub2[<span class=\"descriptionNumberColor\">Departing Anew</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "LC_23034_Sub2[<span class=\"descriptionNumberColor\">Departing Anew</span>]"
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
  "desc": "After the wearer uses Skill or Ultimate on one ally character, the wearer regenerates #1[f1] Energy and the ability's target receives 1 stack of \"Hymn\" for #4[i] turn(s), stacking up to #3[i] time(s). Each stack of \"Hymn\" increases its holder's DMG dealt by #2[i]%. After every #5[i] instance(s) of Skill or Ultimate the wearer uses on one ally character, recovers 1 Skill Point.",
  "params": [
    [
      6,
      0.15,
      3,
      3,
      2
    ],
    [
      6.5,
      0.1725,
      3,
      3,
      2
    ],
    [
      7,
      0.195,
      3,
      3,
      2
    ],
    [
      7.5,
      0.2175,
      3,
      3,
      2
    ],
    [
      8,
      0.24,
      3,
      3,
      2
    ]
  ]
}