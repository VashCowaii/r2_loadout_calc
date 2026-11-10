const configAbility = {
  "fileName": "Lynx_Lynx_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_Lynx_MaxHpValue",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_Lynx_MaxHpConvert",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Preservation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"683860338\">Lynx_HPAddedRatio02</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)"
                },
                "MDF_HPAddValueConvert": {
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))"
                },
                "MDF_HPDelta": {
                  "displayLines": "200"
                },
                "MDF_AggroUp": {
                  "displayLines": "5"
                },
                "MDF_AddStatusResistance": {
                  "displayLines": "0.3"
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
              "modifier": "<a class=\"gModGreen\" id=\"683860338\">Lynx_HPAddedRatio02</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)"
                },
                "MDF_HPAddValueConvert": {
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))"
                },
                "MDF_HPDelta": {
                  "displayLines": "200"
                },
                "MDF_AggroUp": 0,
                "MDF_AddStatusResistance": {
                  "displayLines": "0.3"
                }
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Preservation"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"667082719\">Lynx_HPAddedRatio01</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)"
                },
                "MDF_HPAddValueConvert": {
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)"
                },
                "MDF_HPDelta": {
                  "displayLines": "200"
                },
                "MDF_AggroUp": {
                  "displayLines": "5"
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
              "modifier": "<a class=\"gModGreen\" id=\"667082719\">Lynx_HPAddedRatio01</a>[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)"
                },
                "MDF_HPAddValueConvert": {
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)"
                },
                "MDF_HPDelta": {
                  "displayLines": "200"
                },
                "MDF_AggroUp": 0
              }
            }
          ]
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1832848148\">Lynx_Eidolon2_Resist</a>[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-96135638\">Lynx_Eidolon4_AddAttackRatio</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.03)"
            }
          }
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "healPercent": {
        "displayLines": "0.12"
      },
      "healFlat": {
        "displayLines": "320"
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Survival in the Extreme"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "displayLines": "(2 + 1)"
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "displayLines": "0.036"
            },
            "MDF_HOT_HealValue": {
              "displayLines": "96"
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "displayLines": "0.044999998"
            },
            "MDF_HOT_AggroUp_HealValue": {
              "displayLines": "120"
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
          "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "displayLines": "0.036"
            },
            "MDF_HOT_HealValue": {
              "displayLines": "96"
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "displayLines": "0.044999998"
            },
            "MDF_HOT_AggroUp_HealValue": {
              "displayLines": "120"
            }
          }
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
        "name": "Current Action Holder Is",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}