const configAbility = {
  "fileName": "Huohuo_Huohuo_PassiveAbility01",
  "childAbilityList": [
    "Huohuo_Huohuo_PassiveAbility01",
    "Huohuo_Huohuo_Eidolon2_Insert"
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
      "modifier": "Huohuo_Passive"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Huohuo_Eidolon1PreShow"
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Huohuo_Rank02_ReviveCount",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Huohuo_Eidolon2_ReviveCount[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
          "valuePerStack": {
            "MDF_HealRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_ReviveCount": {
              "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
              "displayLines": "Huohuo_Rank02_ReviveCount",
              "constants": [],
              "variables": [
                "Huohuo_Rank02_ReviveCount"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Huohuo_Eidolon1PreShow",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Huohuo_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.12(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Huohuo_PointB1_SelfSPRatio[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_SPRatio</span>.",
      "type": "Buff",
      "effectName": "Energy Regeneration Rate Boost",
      "statusName": "Energy Regeneration Rate Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Huohuo_Passive",
      "execute": [
        {
          "eventTrigger": "Heal Target Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Huohuo_Eidolon6_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageAddedRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
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
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
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
                      "modifier": "Huohuo_Passive_HealMark[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [],
                        "variables": [
                          2,
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "operator": "Variables[0] (0.044999998) || RETURN",
                          "displayLines": "0.044999998",
                          "constants": [],
                          "variables": [
                            0.044999998
                          ]
                        },
                        "MDF_HPValue": {
                          "operator": "Variables[0] (120) || RETURN",
                          "displayLines": "120",
                          "constants": [],
                          "variables": [
                            120
                          ]
                        },
                        "MDF_LowHP": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_DispelNum": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Huohuo_Passive_HealMark[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "operator": "Variables[0] (0.044999998) || RETURN",
                          "displayLines": "0.044999998",
                          "constants": [],
                          "variables": [
                            0.044999998
                          ]
                        },
                        "MDF_HPValue": {
                          "operator": "Variables[0] (120) || RETURN",
                          "displayLines": "120",
                          "constants": [],
                          "variables": [
                            120
                          ]
                        },
                        "MDF_LowHP": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_DispelNum": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      }
                    }
                  ]
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
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Fearful to Act"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Huohuo_Passive_HealMark[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "valuePerStack": {
                    "MDF_HPRatio": {
                      "operator": "Variables[0] (0.044999998) || RETURN",
                      "displayLines": "0.044999998",
                      "constants": [],
                      "variables": [
                        0.044999998
                      ]
                    },
                    "MDF_HPValue": {
                      "operator": "Variables[0] (120) || RETURN",
                      "displayLines": "120",
                      "constants": [],
                      "variables": [
                        120
                      ]
                    },
                    "MDF_LowHP": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_DispelNum": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
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