const configAbility = {
  "fileName": "Asta_Asta_PassiveAbility_1",
  "childAbilityList": [
    "Asta_Asta_PassiveAbility_1"
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
      "modifier": "<a class=\"gModGreen\" id=\"-89645956\">M_Asta_Passive</a>",
      "valuePerStack": {
        "MDF_CostLayer": {
          "displayLines": "3"
        },
        "MDF_MaxCount": {
          "displayLines": "5"
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "displayLines": "5"
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1558109509\">Asta_Eidolon2Flag</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1587956839\">Asta_AbilityPreShowModifier</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Update Ability Description",
          "popUpText": "Deals minor Fire DMG to single enemy targets with 6 Bounces in total.",
          "skillTrigger": "Skill02"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1587956839\">Asta_AbilityPreShowModifier</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player Team All}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1589111502\">Asta_Ultimate_SpeedUP</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "50(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-89645956\">M_Asta_Passive</a>",
      "stackData": [
        "MDF_CostLayer",
        "MDF_MaxCount"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1558109509\">Asta_Eidolon2Flag</a>"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_Count - (MDF_CostLayer - 1))"
                      },
                      "variableName": "MDF_Count"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_Count - MDF_CostLayer)"
                      },
                      "variableName": "MDF_Count"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "2"
                        }
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "displayLines": "0.14"
                        },
                        "MDF_DefenceAddedRatio": {
                          "displayLines": "0.06"
                        },
                        "MDF_BonusLayer": {
                          "displayLines": "2"
                        },
                        "MDF_SPRatio": {
                          "displayLines": "0.15"
                        },
                        "MDF_CostLayer": {
                          "displayLines": "3"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "maximum": {
                        "displayLines": "5"
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Fire"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_Count + 2)"
                      },
                      "variableName": "MDF_Count"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "MDF_MaxCount"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "MDF_MaxCount"
                          },
                          "variableName": "MDF_Count"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "displayLines": "0.14"
                        },
                        "MDF_DefenceAddedRatio": {
                          "displayLines": "0.06"
                        },
                        "MDF_BonusLayer": {
                          "displayLines": "2"
                        },
                        "MDF_SPRatio": {
                          "displayLines": "0.15"
                        },
                        "MDF_CostLayer": {
                          "displayLines": "3"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_Count + 1)"
                      },
                      "variableName": "MDF_Count"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "MDF_MaxCount"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "MDF_MaxCount"
                          },
                          "variableName": "MDF_Count"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "displayLines": "0.14"
                        },
                        "MDF_DefenceAddedRatio": {
                          "displayLines": "0.06"
                        },
                        "MDF_BonusLayer": {
                          "displayLines": "2"
                        },
                        "MDF_SPRatio": {
                          "displayLines": "0.15"
                        },
                        "MDF_CostLayer": {
                          "displayLines": "3"
                        }
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
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}