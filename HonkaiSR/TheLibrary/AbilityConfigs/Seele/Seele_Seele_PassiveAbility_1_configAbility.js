const configAbility = {
  "fileName": "Seele_Seele_PassiveAbility_1",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rippling Waves"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Ability01PreShowModifier_Fixed",
          "valuePerStack": {
            "MDF_Ability01_Delay": {
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
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Ability02PreShowModifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Local_Seele_ListenKill",
      "valuePerStack": {
        "dmg_percent": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 1,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]",
      "description": "Currently in the extra turn provided by \"Resurgence\".",
      "type": "Other",
      "statusName": "Resurgence"
    },
    {
      "name": "Modifier Construction",
      "for": "Local_Seele_ListenKill",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "InsertAction",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "Normal"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Extra-Turn"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertAction",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  {
                    "name": "Is Ability Ongoing",
                    "target": "Caster",
                    "invertCondition": true
                  }
                ]
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertAction",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "seele_dmg_percent": {
                      "operator": "Variables[0] (dmg_percent) || RETURN",
                      "displayLines": "dmg_percent",
                      "constants": [],
                      "variables": [
                        "dmg_percent"
                      ]
                    },
                    "MDF_Penetrate": {
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
        },
        {
          "eventTrigger": "Got a Queued Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Extra-Turn"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertAction",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  {
                    "name": "Is Ability Ongoing",
                    "target": "Caster",
                    "invertCondition": true
                  }
                ]
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertAction",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "seele_dmg_percent": {
                      "operator": "Variables[0] (dmg_percent) || RETURN",
                      "displayLines": "dmg_percent",
                      "constants": [],
                      "variables": [
                        "dmg_percent"
                      ]
                    },
                    "MDF_Penetrate": {
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
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Seele_Rank6_Listen",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "InsertAction",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertAction",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": "Caster",
                    "includeNonTargets": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Seele_BonusInsertAction",
                  "abilityName": "Seele_Bonus",
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_BonusInsertAction",
                      "value": 0
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
                    "name": "Is Extra-Turn"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Seele_BonusInsertAction",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Local_Seele_PassiveActionModifier[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Seele_BonusInsertAction"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertAction",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertAction",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "dmg_percent"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Ability02PreShowModifier",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "Seele_BPAbility_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            {
              "name": "OR",
              "conditionList": [
                {
                  "name": "NOT",
                  "condition": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Seele_BPAbility_SpeedUpEidolon2[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                  }
                },
                {
                  "name": "Compare: Variable",
                  "target": "Owner of this Modifier",
                  "value1": "Seele_BPAbility_SpeedUpEidolon2[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "compareType": "<",
                  "value2": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valueType": "Layer"
                }
              ]
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.25(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Ability01PreShowModifier_Fixed",
      "stackData": [
        "MDF_Skill01_Delay"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Basic ATK"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (MDF_Skill01_Delay) || INVERT || RETURN",
            "displayLines": "-MDF_Skill01_Delay",
            "constants": [],
            "variables": [
              "MDF_Skill01_Delay"
            ]
          }
        }
      }
    }
  ]
}