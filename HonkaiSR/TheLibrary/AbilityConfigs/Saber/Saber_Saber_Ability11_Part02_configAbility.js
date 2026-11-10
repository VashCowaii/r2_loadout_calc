const configAbility = {
  "fileName": "Saber_Saber_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "S11_Alive_Count",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "living": true
    },
    {
      "name": "IF",
      "conditions": "Under Control Effect",
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Knight of the Dragon"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": "Under Control Effect",
      "failed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "DV_SurgePoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "2"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Crown of the Star"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
              "stackLimit": {
                "displayLines": "8"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.04"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "2"
              }
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
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
              "stackLimit": {
                "displayLines": "15"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.01"
                }
              },
              "addStacksPerTrigger": {
                "displayLines": "2"
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "DV_SurgePoint"
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "1.5"
        },
        "HitSplit": 0.5,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": [
          "Basic ATK (Saber)"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "S11_Alive_Count",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "S11_Alive_Count",
            "compareType": ">",
            "value2": 2
          },
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "displayLines": "1.5"
                },
                "Toughness": null,
                "Tags": [
                  "Basic ATK (Saber)"
                ]
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "2.2"
            },
            "Toughness": null,
            "Tags": [
              "Basic ATK (Saber)"
            ]
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
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "1.5"
        },
        "HitSplit": 0.5,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": [
          "Basic ATK (Saber)"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": "Under Control Effect",
      "failed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-437296268\">Saber_Wind_Ability03_buff</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}