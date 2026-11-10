const configAbility = {
  "fileName": "Xueyi_Xueyi_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"456113055\">Xueyi_Ability03_AddAttackRatio</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "Is_Ultra"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"674322254\">Xueyi_AbilityEidolon4</a>[<span class=\"descriptionNumberColor\">Break Effect Boost</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_AbilityEidolon4_BreakDamageAttackRatio": {
              "displayLines": "0.4"
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1101528365\">Xueyi_Ability03_WeakType_BUFF</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Intrepid Rollerbearings"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Current_Toughness_%",
            "compareType": ">=",
            "value2": {
              "displayLines": "0.5"
            },
            "includeExoToughness": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"462393770\">Xueyi_Trace02</a>",
              "valuePerStack": {
                "MDF_Trace02_AllDamageTypeAddedRatio": {
                  "displayLines": "0.1"
                }
              }
            }
          ]
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
          "displayLines": "2.5"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"462393770\">Xueyi_Trace02</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "MDF_StanceAddAttackRatio"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Is_Ultra"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1101528365\">Xueyi_Ability03_WeakType_BUFF</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"456113055\">Xueyi_Ability03_AddAttackRatio</a>"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}