const configAbility = {
  "fileName": "Archer_Archer_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "MDF_AlreadyInBonusAction"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1612899858\">Archer_BonusTrigger</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
      "immediateEffect": true
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_Skill02UseCount + 1)"
      },
      "variableName": "MDF_Skill02UseCount"
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
          "value": {
            "displayLines": "(MDF_Skill02UseCountInCaps + 1)"
          },
          "variableName": "MDF_Skill02UseCountInCaps"
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
          "displayLines": "(3.6 * ARCHER_OBJECT_UNUSED_1)"
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
              "displayLines": "3"
            }
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "displayLines": "2"
              },
              "adjustmentType": "+"
            }
          ]
        }
      ]
    },
    "Allow Queued Actions(Ult?)",
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
          "modifier": "<a class=\"gModGreen\" id=\"308886295\">Archer_BPAbility_AddDamagePercentage</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
          "stackLimit": {
            "displayLines": "(2 + 1)"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "1"
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
          "modifier": "<a class=\"gModGreen\" id=\"308886295\">Archer_BPAbility_AddDamagePercentage</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
          "stackLimit": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "1"
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
              "displayLines": "MDF_BPNeed"
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
                  "displayLines": "5"
                }
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1031496924\">Standard_Windfury</a>"
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
                  "displayLines": "5"
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
          "value": 1,
          "variableName": "MDF_InBonus"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "MDF_InBonus"
        }
      ]
    },
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}