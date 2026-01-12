const configAbility = {
  "fileName": "Xueyi_Xueyi_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Xueyi_Ability03_AddAttackRatio"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Is_Ultra",
      "value": 1
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
          "to": "Caster",
          "modifier": "Xueyi_AbilityEidolon4[<span class=\"descriptionNumberColor\">Break Effect Boost</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_AbilityEidolon4_BreakDamageAttackRatio": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Xueyi_Ability03_WeakType_BUFF"
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
            "target": "Single Target (Primary)",
            "value1": "Current_Toughness_%",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "includeExoToughness": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_Trace02",
              "valuePerStack": {
                "MDF_Trace02_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2.5) || RETURN",
          "displayLines": "2.5",
          "constants": [],
          "variables": [
            2.5
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
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Xueyi_Trace02"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_StanceAddAttackRatio",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Is_Ultra",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Xueyi_Ability03_WeakType_BUFF"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Xueyi_Ability03_AddAttackRatio"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}