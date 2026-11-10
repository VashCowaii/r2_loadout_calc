const configAbility = {
  "fileName": "Sunday_Sunday_10_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "entityType": "Character"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_MAXSP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_MAXSP * 0.2)"
      },
      "variableName": "_Skill03_AddSPAmount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rest Day's Longing"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Skill03_AddSPAmount",
            "compareType": "<",
            "value2": {
              "displayLines": "40"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "40"
              },
              "variableName": "_Skill03_AddSPAmount"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"761788663\">Sunday_Eidolon2_UltraTag</a>"
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "displayLines": "2"
          },
          "adjustmentType": "+"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"761788663\">Sunday_Eidolon2_UltraTag</a>"
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": {
        "displayLines": "_Skill03_AddSPAmount"
      },
      "isFixed": "(Fixed)",
      "tag": "ActiveSkillAdd"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"762667758\">Sunday_10_Ability03_Link_ForCaster</a>",
          "duration": {
            "displayLines": "3"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "entityType": "Character"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "0.3"
                },
                "MDF_PropertyBase": {
                  "displayLines": "0.12"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "0.3"
                },
                "MDF_PropertyBase": {
                  "displayLines": "0.12"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1449149515\">Sunday_10_MazeBonus_ForCaster</a>[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1449149515\">Sunday_10_MazeBonus_ForCaster</a>[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2041266105\">Sunday_10_MazeBonus</a>[<span class=\"descriptionNumberColor\">The Glorious Mysteries</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.5"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "entityType": "Character"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}} + {{Ability Target(ST)}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2103228822\">Sunday_10_CritUp</a>[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "displayLines": "_P01_LifeTime"
              },
              "stackLimit": {
                "displayLines": "_SkillP01_StackingLayer"
              },
              "valuePerStack": {
                "MDF_CritValue": {
                  "displayLines": "0.2"
                }
              },
              "addStacksPerTrigger": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2103228822\">Sunday_10_CritUp</a>[<span class=\"descriptionNumberColor\">The Sorrowing Body</span>]",
              "duration": {
                "displayLines": "_P01_LifeTime"
              },
              "stackLimit": {
                "displayLines": "_SkillP01_StackingLayer"
              },
              "valuePerStack": {
                "MDF_CritValue": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1076921726\">Sunday_10_Ability03_Link_Damage</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1034196387\">MW_Sunday_Passive</a>"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Custom Damage Type",
                      "initialTypePreRead": "Physical",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    "Damage": {
                      "displayLines": "MDF_DamagePercentage"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__762667758\">Sunday_10_Ability03_Link_ForCaster</a>",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "_lifeTime",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_lifeTime",
                "compareType": ">",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "(_lifeTime - 1)"
                  },
                  "priorState": "Active"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "_lifeTime",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "_lifeTime"
              },
              "priorState": "Active"
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_ownerCritDamage",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((_ownerCritDamage * 0.3) + 0.12)"
                      },
                      "variableName": "_PropertyFinal"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>[<span class=\"descriptionNumberColor\">The Beatified</span>]",
                      "variableName": "MDF_PropertyFinal",
                      "value": {
                        "displayLines": "_PropertyFinal"
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
    "primaryTarget": "{{Ability Target List}}"
  }
}