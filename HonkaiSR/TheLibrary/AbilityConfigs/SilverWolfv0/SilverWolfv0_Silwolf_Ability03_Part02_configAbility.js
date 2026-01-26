const configAbility = {
  "fileName": "SilverWolfv0_Silwolf_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 8,
      "Event": []
    },
    {
      "name": "Looped Event",
      "maxLoops": 8,
      "Event": []
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.45) || RETURN",
          "displayLines": "0.45",
          "constants": [],
          "variables": [
            0.45
          ]
        }
      }
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
          "operator": "Variables[0] (3.8) || RETURN",
          "displayLines": "3.8",
          "constants": [],
          "variables": [
            3.8
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
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DebuffCountForRank04",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_DebuffCountForRank04",
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DebuffCountForRank04",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_DebuffCountForRank04) || RETURN",
                "displayLines": "_DebuffCountForRank04",
                "constants": [],
                "variables": [
                  "_DebuffCountForRank04"
                ]
              },
              "Event": [
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
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ]
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DebuffCountForRank01",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_DebuffCountForRank01",
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              }
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (7) || Variables[1] (_DebuffCountForRank01) || MUL || RETURN",
            "displayLines": "(7 * _DebuffCountForRank01)",
            "constants": [],
            "variables": [
              7,
              "_DebuffCountForRank01"
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}