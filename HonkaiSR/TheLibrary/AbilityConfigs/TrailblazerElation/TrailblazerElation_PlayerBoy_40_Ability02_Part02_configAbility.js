const configAbility = {
  "fileName": "TrailblazerElation_PlayerBoy_40_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Rank01",
        "compareType": ">=",
        "value2": 1,
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-138559016\">Player_40_Eidolon1_Count</a>[<span class=\"descriptionNumberColor\">Believe In the Light</span>]",
          "duration": -1,
          "stackLimit": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          },
          "addStacksPerTrigger": 1
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
        "modifier": "<a class=\"gModGreen\" id=\"1940881761\">Player_40_PointB3_P1Mark</a>[<span class=\"descriptionNumberColor\">Aha, Sic 'Em!</span>]"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "AddValue": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940881761\">Player_40_PointB3_P1Mark</a>[<span class=\"descriptionNumberColor\">Aha, Sic 'Em!</span>]"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Skill",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "ElationEchoPoint"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "DamageElation": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "instanceTag": "Skill02_ElationDamage",
            "Tags": null,
            "attackType": "Elation DMG"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variables": {
        "AddValue": {
          "operator": "Variables[0] (20) || RETURN",
          "displayLines": "20",
          "constants": [],
          "variables": [
            20
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-138559016\">Player_40_Eidolon1_Count</a>[<span class=\"descriptionNumberColor\">Believe In the Light</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "_Rank01_ElationEcho",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (2) || MUL || RETURN",
                "displayLines": "(MDF_Layer * 2)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  2
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_Rank01"
      ],
      "description": "Each stack increases the \"Certified Banger\" gained by ally targets when the next Ultimate is used by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "statusName": "Believe In the Light"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}