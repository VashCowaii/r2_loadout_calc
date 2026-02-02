const configAbility = {
  "fileName": "March7thTH_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "Mar_7th_10_Jianshi",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count SUM",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                },
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Harmony",
                  "Nihility",
                  "Preservation",
                  "Abundance",
                  "Remembrance"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Marth 7th's Shifu}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Arg00_IsSkill11",
                    "compareType": "<=",
                    "value2": 0
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
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Marth 7th's Shifu}}"
                      }
                    },
                    "Damage": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Arg00_IsSkill11",
                    "compareType": "<=",
                    "value2": 0
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Mar_7th_10_GainEnergyWithCheck",
      "parse": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "EnergyBar_CurEnergy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
            "displayLines": "parameter[0]_AddValue",
            "constants": [],
            "variables": [
              "parameter[0]_AddValue"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "EnergyBar_CurEnergy",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
                  "displayLines": "EnergyBar_MaxEnergy",
                  "constants": [],
                  "variables": [
                    "EnergyBar_MaxEnergy"
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": 0,
                  "adjustmentType": "="
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "set": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mar_7th_10_Enhance",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Mar_7th_10_Enhance"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}