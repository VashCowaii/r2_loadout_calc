const configAbility = {
  "fileName": "Tribbie_Tribbie_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Tribbie_Eidolon6_Bonus_Active",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (7.29) || RETURN",
              "displayLines": "7.29",
              "constants": [],
              "variables": [
                7.29
              ]
            }
          }
        }
      ]
    },
    {
      "name": "UI Display Event",
      "popUpText": "Busy as Tribbie"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "All Hostile Entities (AOE)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (0.18) || RETURN",
          "displayLines": "0.18",
          "constants": [],
          "variables": [
            0.18
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
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Tribbie_Eidolon6_Bonus_Active"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Lamb Outside the Wall..."
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Tribbie_PointB1_DamageUpModifier[<span class=\"descriptionNumberColor\">Lamb Outside the Wall...</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        }
      ]
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
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Tribbie_Insert",
              "abilitySource": "Caster",
              "abilityTarget": "All Hostile Entities (AOE)",
              "priorityTag": "AvatarInsertAttackSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            },
            {
              "name": "Define Custom Variable",
              "variableName": "OnInsertAbort_Flg",
              "value": 0
            }
          ]
        }
      ]
    }
  ],
  "references": []
}