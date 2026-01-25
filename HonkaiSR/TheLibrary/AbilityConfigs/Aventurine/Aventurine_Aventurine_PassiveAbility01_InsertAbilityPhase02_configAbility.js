const configAbility = {
  "fileName": "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
          "modifier": "Aventurine_Passive_AddDefence[<span class=\"descriptionNumberColor\">Unexpected Hanging Paradox</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_AttackCount",
          "value": {
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
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Bingo!"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Aventurine_Trace03_Trigger"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "MDF_Layer2",
      "modifierName": "Aventurine_Passive_ShieldEnergy",
      "multiplier": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Aventurine_Passive_ShieldEnergy"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Aventurine_Passive_ShieldEnergy",
      "addStacksPerTrigger": {
        "operator": "Variables[0] (MDF_Layer2) || Constants[0] (7) || SUB || RETURN",
        "displayLines": "(MDF_Layer2 - 7)",
        "constants": [
          7
        ],
        "variables": [
          "MDF_Layer2"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "MDF_AttackGap",
      "value": {
        "operator": "Constants[0] (1) || Variables[0] (7) || Variables[1] (MDF_AttackCount) || ADD || DIV || RETURN",
        "displayLines": "(1 / (7 + MDF_AttackCount))",
        "constants": [
          1
        ],
        "variables": [
          7,
          "MDF_AttackCount"
        ]
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (7) || Variables[1] (MDF_AttackCount) || ADD || RETURN",
        "displayLines": "(7 + MDF_AttackCount)",
        "constants": [],
        "variables": [
          7,
          "MDF_AttackCount"
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                },
                "dmgFormula": "DEF Scaling",
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
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}