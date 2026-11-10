const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Dr_RatioAttack"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Dr_Ratio_00_EnergyBar_Flag"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1963870595\">Dr_Ratio_Insert_Flag_Caster</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-253275642\">Dr_Ratio_Insert_Flag</a>"
    },
    {
      "name": "Define Custom Variable with Status Counter",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_DebuffCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_DebuffCount",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.4"
          },
          "variableName": "_Dr_Ratio_InsertChance"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_Dr_Ratio_InsertChance + (_DebuffCount * 0.2))"
          },
          "variableName": "_Dr_Ratio_InsertChance"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.4"
          },
          "variableName": "_Dr_Ratio_InsertChance"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": {
              "displayLines": "_Dr_Ratio_InsertChance"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-253275642\">Dr_Ratio_Insert_Flag</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_DebuffCount",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Summation"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCount",
                "compareType": ">=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 5,
                  "variableName": "_EffDebuffCount"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "_DebuffCount"
                  },
                  "variableName": "_EffDebuffCount"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "_SkillTree_SkillFlag"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Summation"
      },
      "passed": [
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DebuffCount",
            "compareType": ">=",
            "value2": 1
          },
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_DebuffCount - 1)"
              },
              "variableName": "_DebuffCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCount",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_DebuffCount"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Trace Activated",
                    "conditionList": "Summation"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1828934114\">Dr_Ratio_Ability03_PointB1_Bonus</a>[<span class=\"descriptionNumberColor\">Summation</span>]",
                  "stackLimit": {
                    "displayLines": "(6 + 4)"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "displayLines": "0.025"
                    },
                    "MDF_PropertyValue02": {
                      "displayLines": "0.05"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1828934114\">Dr_Ratio_Ability03_PointB1_Bonus</a>[<span class=\"descriptionNumberColor\">Summation</span>]",
                  "stackLimit": {
                    "displayLines": "6"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue01": {
                      "displayLines": "0.025"
                    },
                    "MDF_PropertyValue02": {
                      "displayLines": "0.05"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_EffDebuffCount",
            "compareType": ">=",
            "value2": 1
          },
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_EffDebuffCount - 1)"
              },
              "variableName": "_EffDebuffCount"
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
        "modifier": "<a class=\"gModGreen\" id=\"1963870595\">Dr_Ratio_Insert_Flag_Caster</a>"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "1.5"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Inference"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1051491293\">Dr_Ratio_Slow</a>[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
          "duration": {
            "displayLines": "2"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.1"
            }
          }
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
        "modifier": "<a class=\"gModGreen\" id=\"1963870595\">Dr_Ratio_Insert_Flag_Caster</a>"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1506583423\">Dr_Ratio_InsertAbility</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "_SkillTree_SkillFlag"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1051491293\">Dr_Ratio_Slow</a>[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_Dr_RatioAttack",
        "_Dr_Ratio_00_EnergyBar_Flag",
        "_SkillTree_SkillFlag"
      ],
      "description": "Effect RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Effect RES Reduction",
      "statusName": "Effect RES Reduction",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "value": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
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