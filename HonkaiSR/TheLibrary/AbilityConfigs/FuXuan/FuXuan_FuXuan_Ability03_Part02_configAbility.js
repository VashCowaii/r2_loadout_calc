const configAbility = {
  "fileName": "FuXuan_FuXuan_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Dunjia, the Metamystic"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "HealHPValue",
          "value": {
            "operator": "Variables[0] (MaxHP) || Variables[1] (0.05) || MUL || Variables[2] (133) || ADD || RETURN",
            "displayLines": "((MaxHP * 0.05) + 133)",
            "constants": [],
            "variables": [
              "MaxHP",
              0.05,
              133
            ]
          }
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "healFlat": {
            "operator": "Variables[0] (HealHPValue) || RETURN",
            "displayLines": "HealHPValue",
            "constants": [],
            "variables": [
              "HealHPValue"
            ]
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
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "GDF_AllTeamMemberLoseHPValue",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (CasterMaxHP) || Variables[1] (1.2) || MUL || RETURN",
              "displayLines": "(CasterMaxHP * 1.2)",
              "constants": [],
              "variables": [
                "CasterMaxHP",
                1.2
              ]
            }
          },
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "GDF_AllTeamMemberLoseHPValue",
              "value": {
                "operator": "Variables[0] (CasterMaxHP) || Variables[1] (1.2) || MUL || RETURN",
                "displayLines": "(CasterMaxHP * 1.2)",
                "constants": [],
                "variables": [
                  "CasterMaxHP",
                  1.2
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DamageFlat": {
              "operator": "Variables[0] (GDF_AllTeamMemberLoseHPValue) || Variables[1] (2) || MUL || RETURN",
              "displayLines": "(GDF_AllTeamMemberLoseHPValue * 2)",
              "constants": [],
              "variables": [
                "GDF_AllTeamMemberLoseHPValue",
                2
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "GDF_AllTeamMemberLoseHPValue",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "GDF_ExChangeHPCount",
      "value": {
        "operator": "Variables[0] (GDF_ExChangeHPCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(GDF_ExChangeHPCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "GDF_ExChangeHPCount"
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (GDF_ExChangeHPCount) || RETURN",
        "displayLines": "GDF_ExChangeHPCount",
        "constants": [],
        "variables": [
          "GDF_ExChangeHPCount"
        ]
      },
      "maximum": 2,
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "CurrentHP",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "GDF_LimboHPChangeFlag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "GDF_ExChangeHPCount",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "FuXuan_Passive_Ability",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "AvatarHealSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}