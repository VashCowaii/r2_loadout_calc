const configAbility = {
  "fileName": "Moze_Moze_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Moze_InInsert_Tag"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Cascading Featherblade"
    },
    "Deleted bullshit",
    {
      "name": "Trigger Multiple Functions",
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Moze_Insert_Part01_Effect"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Moze_Insert_Part01_LoopDamage",
          "baseDelay": {
            "operator": "Variables[0] (MOZE_OBJECT_UNUSED_2) || RETURN",
            "displayLines": "MOZE_OBJECT_UNUSED_2",
            "constants": [],
            "variables": [
              "MOZE_OBJECT_UNUSED_2"
            ]
          },
          "delayInterval": {
            "operator": "Variables[0] (MOZE_OBJECT_UNUSED_2) || RETURN",
            "displayLines": "MOZE_OBJECT_UNUSED_2",
            "constants": [],
            "variables": [
              "MOZE_OBJECT_UNUSED_2"
            ]
          },
          "parallelCount": {
            "operator": "Variables[0] (MOZE_OBJECT_UNUSED_1) || RETURN",
            "displayLines": "MOZE_OBJECT_UNUSED_1",
            "constants": [],
            "variables": [
              "MOZE_OBJECT_UNUSED_1"
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
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (MDF_InsertDamagePercentage) || RETURN",
          "displayLines": "MDF_InsertDamagePercentage",
          "constants": [],
          "variables": [
            "MDF_InsertDamagePercentage"
          ]
        },
        "HitSplit": 0.6,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_EnergyCost",
      "value": {
        "operator": "Variables[0] (MDF_EnergyCost) || Variables[1] (3) || SUB || RETURN",
        "displayLines": "(MDF_EnergyCost - 3)",
        "constants": [],
        "variables": [
          "MDF_EnergyCost",
          3
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_SkillP01_CurrentCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_SkillP01_CurrentCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Moze_Ability02_InShadowModifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Nightfeather"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "adjustmentType": "+"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_SkillP01_CurrentCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "isFixed": "* ERR"
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
        "modifier": "Moze_Ability02_InShadowModifier"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Moze_InInsert_Tag"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          {
            "name": "Compare: Variable",
            "value1": "MDF_EnergyCost",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
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
          "abilityName": "Moze_Insert_Part01",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "priorityTag": "AvatarInsertAttackSelf",
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
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Moze_Insert_Part01_LoopDamage",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (MDF_InsertDamagePercentage) || RETURN",
              "displayLines": "MDF_InsertDamagePercentage",
              "constants": [],
              "variables": [
                "MDF_InsertDamagePercentage"
              ]
            },
            "HitSplit": 0.08,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Moze_Insert_Part01_Effect",
      "parse": []
    }
  ],
  "references": []
}