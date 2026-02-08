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
      "modifier": "<a class=\"gModGreen\" id=\"-989533278\">Aventurine_Ability03_CoinAdd</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-839248266\">Aventurine_Ability03_CritDmgIncrease</a>[<span class=\"descriptionNumberColor\">Unnerved</span>]",
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
          "functionName": "<a class=\"gTempYellow\" id=\"-969049614\">Aventurine_RecordCurrentShield</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1566932811\">Aventurine_Ability02_ShieldEffect</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-626881481\">Aventurine_Heal_Mark</a>"
    }
  ]
}