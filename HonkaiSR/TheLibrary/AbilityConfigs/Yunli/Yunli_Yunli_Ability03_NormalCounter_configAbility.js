const configAbility = {
  "fileName": "Yunli_Yunli_Ability03_NormalCounter",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_Energy_Count",
      "value": {
        "operator": "Variables[0] (MDF_Energy_Count) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(MDF_Energy_Count + 1)",
        "constants": [
          1
        ],
        "variables": [
          "MDF_Energy_Count"
        ]
      }
    },
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Yunli_Blocking_BeingAttackMark"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (2.2) || RETURN",
          "displayLines": "2.2",
          "constants": [],
          "variables": [
            2.2
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
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "instanceTag": "Yunli_Migiri_Damage",
        "Tags": [
          "Counter"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (1.1) || RETURN",
          "displayLines": "1.1",
          "constants": [],
          "variables": [
            1.1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Physical"
        },
        "instanceTag": "Yunli_Migiri_Damage",
        "Tags": [
          "Counter"
        ],
        "attackType": "Follow-up"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Yunli_AddRegardAsAttackType"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Yunli_Blocking_CritDamage[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]"
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_LoopDamage",
      "value": {
        "operator": "Variables[0] (0.72) || RETURN",
        "displayLines": "0.72",
        "constants": [],
        "variables": [
          0.72
        ]
      }
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
          "modifier": "Yunli_Eidolon4[<span class=\"descriptionNumberColor\">Artisan's Ironsong</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_ProbabilityValue": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "OnInsertAbort_Flg",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Fiery Wheel"
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Active",
          "bar#": 1,
          "cooldown": 0
        }
      ]
    },
    "Trigger: Skip Death Handling",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Yunli_Eidolon1"
    }
  ],
  "references": []
}