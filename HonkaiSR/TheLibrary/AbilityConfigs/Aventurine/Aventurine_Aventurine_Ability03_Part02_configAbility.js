const configAbility = {
  "fileName": "Aventurine_Aventurine_Ability03_Part02",
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
      "modifier": "Aventurine_Ability03_CoinAdd"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Aventurine_Ability03_CritDmgIncrease[<span class=\"descriptionNumberColor\">Unnerved</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.15) || RETURN",
          "displayLines": "0.15",
          "constants": [],
          "variables": [
            0.15
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
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (2.7) || RETURN",
          "displayLines": "2.7",
          "constants": [],
          "variables": [
            2.7
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
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Aventurine_RecordCurrentShield"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_CurrentDefence2",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Aventurine_StackableShield",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_InitShieldValue": {
              "operator": "Variables[0] (1) || Variables[1] (MDF_CurrentDefence2) || Variables[2] (0.24) || MUL || Variables[3] (320) || ADD || MUL || RETURN",
              "displayLines": "(1 * ((MDF_CurrentDefence2 * 0.24) + 320))",
              "constants": [],
              "variables": [
                1,
                "MDF_CurrentDefence2",
                0.24,
                320
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_ForceShield": {
              "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
              "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
              "constants": [],
              "variables": [
                "MDF_CurrentDefence2",
                0.24,
                320
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Aventurine_Ability02_ShieldEffect",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TeammateCount1",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        0.2,
                        0.2,
                        0.2
                      ],
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TeammateCount1",
                          "value": 2
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TeammateCount1",
                          "value": 3
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TeammateCount1",
                          "value": 4
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Aventurine_Ability02_ShieldEffect",
                  "valuePerStack": {
                    "MDF_ResistanceRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_TeammateCount": {
                      "operator": "Variables[0] (MDF_TeammateCount1) || RETURN",
                      "displayLines": "MDF_TeammateCount1",
                      "constants": [],
                      "variables": [
                        "MDF_TeammateCount1"
                      ]
                    },
                    "MDF_CritDmg1": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Aventurine_Heal_Mark"
    }
  ]
}