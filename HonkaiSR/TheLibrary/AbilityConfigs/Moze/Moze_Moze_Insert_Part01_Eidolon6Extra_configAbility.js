const configAbility = {
  "fileName": "Moze_Moze_Insert_Part01_Eidolon6Extra",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
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
      "target": "Single Target (Primary)",
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
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "OnInsertAbort_Flg",
      "value": 0
    },
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
            "target": "Caster",
            "modifier": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
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
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Moze_Ability02_InShadowModifier",
        "invertCondition": true
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Moze_InInsert_Tag"
    }
  ],
  "onAbort": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": "Caster",
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": "Caster",
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": "Caster"
          },
          {
            "name": "Compare: Variable",
            "value1": "OnInsertAbort_Flg",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": "Caster",
            "includeNonTargets": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": "All Enemies (AOE)",
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": "Use Prior Target(s) Defined"
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                  "abilitySource": "Caster",
                  "abilityTarget": "Use Prior Target(s) Defined",
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
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "OnInsertAbort_Flg",
          "value": 0
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
          "target": "Single Target (Primary)",
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