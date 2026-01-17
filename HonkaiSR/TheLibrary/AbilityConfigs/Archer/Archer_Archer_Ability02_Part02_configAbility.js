const configAbility = {
  "fileName": "Archer_Archer_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_AlreadyInBonusAction",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Archer_BonusTrigger[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
      "immediateEffect": true
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_Skill02UseCount",
      "value": {
        "operator": "Variables[0] (MDF_Skill02UseCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(MDF_Skill02UseCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "MDF_Skill02UseCount"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_IsWindfurySkill",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill02UseCountInCaps",
          "value": {
            "operator": "Variables[0] (MDF_Skill02UseCountInCaps) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(MDF_Skill02UseCountInCaps + 1)",
            "constants": [
              1
            ],
            "variables": [
              "MDF_Skill02UseCountInCaps"
            ]
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (3.6) || Variables[1] (ARCHER_OBJECT_UNUSED_1) || MUL || RETURN",
          "displayLines": "(3.6 * ARCHER_OBJECT_UNUSED_1)",
          "constants": [],
          "variables": [
            3.6,
            "ARCHER_OBJECT_UNUSED_1"
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Skill02UseCount",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "adjustmentType": "+"
            }
          ]
        }
      ]
    },
    {
      "name": "Allow Queued Actions(Ult?)"
    },
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
            "target": "{{Caster}}"
          },
          "modifier": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
          "stackLimit": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
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
          "modifier": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
          "stackLimit": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          },
          "addStacksPerTrigger": 1
        }
      ]
    },
    {
      "name": "Define Custom Variable with Ability Property",
      "skillKey": "Skill02",
      "variableName": "MDF_BPNeed",
      "propertyName": "Skill Point Cost"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "CurrentSkillPoints",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (MDF_BPNeed) || RETURN",
              "displayLines": "MDF_BPNeed",
              "constants": [],
              "variables": [
                "MDF_BPNeed"
              ]
            }
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "MDF_Skill02UseCountInCaps",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                }
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Standard_Windfury"
              }
            ]
          },
          {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "MDF_Skill02UseCountInCaps",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "MDF_IsWindfurySkill",
                "compareType": "=",
                "value2": 1
              }
            ],
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_InBonus",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_InBonus",
          "value": 0
        }
      ]
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Death Animation Completed",
        "team": "TeamDark",
        "type": "Team Characters"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}