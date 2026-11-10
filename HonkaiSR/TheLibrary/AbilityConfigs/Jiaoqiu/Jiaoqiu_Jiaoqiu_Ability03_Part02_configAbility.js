const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Layer_Total"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "valueType": "Layer",
          "variableName": "_Temp_Val",
          "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Layer_Total",
            "compareType": "<=",
            "value2": {
              "displayLines": "_Temp_Val"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "_Temp_Val"
              },
              "variableName": "_Layer_Total"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Layer_Total",
        "compareType": ">=",
        "value2": 0.5
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Temp_Val"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Temp_Val",
                  "modifierName": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "multiplier": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Layer_Total",
                "compareType": ">",
                "value2": {
                  "displayLines": "_Temp_Val"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "stackLimit": {
                    "displayLines": "_MaxLayer"
                  },
                  "valuePerStack": {
                    "DOT_Ratio": {
                      "displayLines": "SkillP01_DotRatio"
                    },
                    "AbilityRank_Eidolon2_P1_Ratio": {
                      "displayLines": "3"
                    },
                    "AbilityRank_Eidolon6_P3_DownRatio": {
                      "displayLines": "0.03"
                    },
                    "MDF_PropertyValue": {
                      "displayLines": "0.15"
                    },
                    "MDF_PropertyValue_2": {
                      "displayLines": "0.05"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "(_Layer_Total - _Temp_Val)"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1304078651\">Jiaoqiu_Aura</a>",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "Ability03_P1_DamagePercentage": {
          "displayLines": "1"
        },
        "Ability03_P2_Ratio": 0,
        "Ability03_P3_Value": 0,
        "Ability03_P3_Ratio": 0,
        "Ability03_P4_Duration": 0
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1 + 1)"
              },
              "variableName": "Rank01_Stack_Layer"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "1"
              },
              "variableName": "Rank01_Stack_Layer"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
          "duration": {
            "displayLines": "2"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "stackLimit": {
            "displayLines": "_MaxLayer"
          },
          "valuePerStack": {
            "DOT_Ratio": {
              "displayLines": "SkillP01_DotRatio"
            },
            "AbilityRank_Eidolon2_P1_Ratio": {
              "displayLines": "3"
            },
            "AbilityRank_Eidolon6_P3_DownRatio": {
              "displayLines": "0.03"
            },
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            },
            "MDF_PropertyValue_2": {
              "displayLines": "0.05"
            }
          },
          "addStacksPerTrigger": {
            "displayLines": "Rank01_Stack_Layer"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "1"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "3"
      },
      "maximum": {
        "displayLines": "3"
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}