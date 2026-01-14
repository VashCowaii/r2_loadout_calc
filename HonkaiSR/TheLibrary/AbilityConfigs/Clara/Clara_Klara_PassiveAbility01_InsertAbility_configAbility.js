const configAbility = {
  "fileName": "Clara_Klara_PassiveAbility01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Because We're Family"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_ATKCount",
          "value": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(EnergyBar_ATKCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "EnergyBar_ATKCount"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
            "displayLines": "EnergyBar_ATKCount",
            "constants": [],
            "variables": [
              "EnergyBar_ATKCount"
            ]
          },
          "assignState": "True",
          "priorState": "Active"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Revenge"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Klara_Trace03",
          "valuePerStack": {
            "MDF_AllDamageTypeAddRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.6) || Variables[1] (1.6) || ADD || RETURN",
              "displayLines": "(1.6 + 1.6)",
              "constants": [],
              "variables": [
                1.6,
                1.6
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
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": "Blast (Adjacent)",
          "searchRandom": true,
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Variables[1] (1.6) || ADD || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "((1.6 + 1.6) / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    1.6,
                    1.6
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
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Modifier Variable",
          "modifierName": "Klara_PassiveATKCount[<span class=\"descriptionNumberColor\">Enhanced Counter</span>]",
          "function": "Add"
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Klara_Trace03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Klara_Trace03",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "MDF_AllDamageTypeAddRatio"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeAddRatio"
      ],
      "latentQueue": []
    }
  ]
}