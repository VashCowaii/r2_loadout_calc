const configAbility = {
  "fileName": "Blade_AdvancedRen_Ability03_Part02",
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
        "displayLines": "(CasterMaxHP * 0.5)"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "CasterLostHPPercentage",
        "compareType": ">=",
        "value2": {
          "displayLines": "0.9"
        },
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(CasterMaxHP * 0.9)"
          },
          "variableName": "CasterFinalLostHP"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "CasterLostHP"
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
              "displayLines": "1.5"
            },
            "DamageFlat": {
              "displayLines": "((CasterFinalLostHP * 1.2) + (CasterFinalLostHP * 1.5))"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
              "displayLines": "1.5"
            },
            "DamageFlat": {
              "displayLines": "(CasterFinalLostHP * 1.2)"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
          "displayLines": "0.6"
        },
        "DamageFlat": {
          "displayLines": "(CasterFinalLostHP * 0.6)"
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Vita Infinita"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CasterFinalLostHP",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(CasterFinalLostHP * (1 - 0.5))"
              },
              "variableName": "CasterLostHP"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(CasterFinalLostHP * (1 - 0.5))"
              },
              "variableName": "CasterFinalLostHP"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1574082321\">Ren_CheckHPChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-936894999\">Advanced_Ren_Ability03_Listen</a>[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "CasterFinalLostHP"
            }
          }
        }
      ],
      "failed": [
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1574082321\">Ren_CheckHPChange</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-936894999\">Advanced_Ren_Ability03_Listen</a>[<span class=\"descriptionNumberColor\">Death Sentence</span>]"
        }
      ]
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