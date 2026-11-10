const configAbility = {
  "fileName": "Huohuo_Advanced_Huohuo_PassiveAbility01",
  "childAbilityList": [
    "Huohuo_Advanced_Huohuo_PassiveAbility01",
    "Huohuo_Advanced_Huohuo_Eidolon2_Insert"
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
      "modifier": "<a class=\"gModGreen\" id=\"-571478825\">Advanced_Huohuo_Passive</a>"
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
            "displayLines": "(3 + 1)"
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
          "modifier": "<a class=\"gModGreen\" id=\"1425518105\">Advanced_Huohuo_Eidolon1PreShow</a>"
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "3"
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
          "value": {
            "displayLines": "2"
          },
          "variableName": "Huohuo_Rank02_ReviveCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1527901195\">Advanced_Huohuo_Eidolon2_ReviveCount</a>[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
          "valuePerStack": {
            "MDF_HealRatio": {
              "displayLines": "0.5"
            },
            "MDF_ReviveCount": {
              "displayLines": "Huohuo_Rank02_ReviveCount"
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1425518105\">Advanced_Huohuo_Eidolon1PreShow</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "skillType": [
          "Skill",
          "Ultimate"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"528503958\">Advanced_Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__509282506\">Advanced_Huohuo_PointB1_SelfSPRatio</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-571478825\">Advanced_Huohuo_Passive</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"167222959\">Advanced_Huohuo_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_DamageAddedRatio": {
                      "displayLines": "0.5"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "duration": {
                        "displayLines": "(3 + 1)"
                      },
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "displayLines": "0.044999998"
                        },
                        "MDF_HPValue": {
                          "displayLines": "120"
                        },
                        "MDF_LowHP": {
                          "displayLines": "0.5"
                        },
                        "MDF_DispelNum": {
                          "displayLines": "1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "duration": {
                        "displayLines": "3"
                      },
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "displayLines": "0.044999998"
                        },
                        "MDF_HPValue": {
                          "displayLines": "120"
                        },
                        "MDF_LowHP": {
                          "displayLines": "0.5"
                        },
                        "MDF_DispelNum": {
                          "displayLines": "1"
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
          "priorityLevel": -80,
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
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "30"
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_HPRatio": {
                      "displayLines": "0.044999998"
                    },
                    "MDF_HPValue": {
                      "displayLines": "120"
                    },
                    "MDF_LowHP": {
                      "displayLines": "0.5"
                    },
                    "MDF_DispelNum": {
                      "displayLines": "1"
                    }
                  }
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