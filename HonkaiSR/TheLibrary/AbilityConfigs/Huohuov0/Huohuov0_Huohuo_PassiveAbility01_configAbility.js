const configAbility = {
  "fileName": "Huohuov0_Huohuo_PassiveAbility01",
  "childAbilityList": [
    "Huohuov0_Huohuo_PassiveAbility01",
    "Huohuov0_Huohuo_Eidolon2_Insert"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1608829904\">Huohuo_Passive</a>"
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
            "displayLines": "(2 + 1)"
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
          "modifier": "<a class=\"gModGreen\" id=\"679515294\">Huohuo_Eidolon1PreShow</a>"
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "2"
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
          "modifier": "<a class=\"gModGreen\" id=\"1683962968\">Huohuo_Eidolon2_ReviveCount</a>[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__679515294\">Huohuo_Eidolon1PreShow</a>",
      "stackType": "ReplaceByCaster",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1345100241\">Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1045223345\">Huohuo_PointB1_SelfSPRatio</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
      "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_SPRatio</span>.",
      "type": "Buff",
      "effectName": "Energy Regeneration Rate Boost",
      "statusName": "Energy Regeneration Rate Boost",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1608829904\">Huohuo_Passive</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2048047648\">Huohuo_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "duration": {
                        "displayLines": "(2 + 1)"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "duration": {
                    "displayLines": "1"
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