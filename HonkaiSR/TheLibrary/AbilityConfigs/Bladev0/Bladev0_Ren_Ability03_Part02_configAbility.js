const configAbility = {
  "fileName": "Bladev0_Ren_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "value1": "CurrentHP%",
        "compareType": ">=",
        "value2": 0.5
      },
      "passed": [
        {
          "name": "Define Custom Variable with HP%",
          "variableName": "DamageExtra_HPRatio",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DamageExtra_HPRatio"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "MwRen_isHeal"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "CasterCurrentHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
    },
    {
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "clearNegativeHP": true,
      "setValue": {
        "operator": "Variables[0] (CasterMaxHP) || Constants[0] (0.5) || MUL || RETURN",
        "displayLines": "(CasterMaxHP * 0.5)",
        "constants": [
          0.5
        ],
        "variables": [
          "CasterMaxHP"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "MwRen_isHeal"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CasterLostHPPercentage",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (0.9) || RETURN",
          "displayLines": "0.9",
          "constants": [],
          "variables": [
            0.9
          ]
        },
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (CasterMaxHP) || Variables[1] (0.9) || MUL || RETURN",
            "displayLines": "(CasterMaxHP * 0.9)",
            "constants": [],
            "variables": [
              "CasterMaxHP",
              0.9
            ]
          },
          "variableName": "CasterFinalLostHP"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (CasterLostHP) || RETURN",
            "displayLines": "CasterLostHP",
            "constants": [],
            "variables": [
              "CasterLostHP"
            ]
          },
          "variableName": "CasterFinalLostHP"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DamageFlat": {
              "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1) || MUL || Variables[0] (CasterFinalLostHP) || Variables[2] (1.5) || MUL || ADD || RETURN",
              "displayLines": "((CasterFinalLostHP * 1) + (CasterFinalLostHP * 1.5))",
              "constants": [],
              "variables": [
                "CasterFinalLostHP",
                1,
                1.5
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DamageFlat": {
              "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1) || MUL || RETURN",
              "displayLines": "(CasterFinalLostHP * 1)",
              "constants": [],
              "variables": [
                "CasterFinalLostHP",
                1
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (0.16) || RETURN",
          "displayLines": "0.16",
          "constants": [],
          "variables": [
            0.16
          ]
        },
        "DamageExtra": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
          ]
        },
        "DamageFlat": {
          "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (0.4) || MUL || RETURN",
          "displayLines": "(CasterFinalLostHP * 0.4)",
          "constants": [],
          "variables": [
            "CasterFinalLostHP",
            0.4
          ]
        },
        "dmgFormulaExtra": "Max HP Scaling",
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "CasterLostHP"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "CasterFinalLostHP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-870658235\">MWRen_Ability03_Listen</a>[<span class=\"descriptionNumberColor\">Death Sentence</span>]"
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}