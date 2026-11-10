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
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.15"
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
          "displayLines": "2.7"
        },
        "dmgFormula": "DEF Scaling",
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
          "variableName": "MDF_CurrentDefence2",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
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
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_InitShieldValue": {
              "displayLines": "(1 * ((MDF_CurrentDefence2 * 0.24) + 320))"
            },
            "MDF_MaxShieldRatio": {
              "displayLines": "2"
            },
            "MDF_ForceShield": {
              "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_TeammateCount1"
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
                          "value": 2,
                          "variableName": "MDF_TeammateCount1"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 3,
                          "variableName": "MDF_TeammateCount1"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 4,
                          "variableName": "MDF_TeammateCount1"
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
                      "displayLines": "0.5"
                    },
                    "MDF_TeammateCount": {
                      "displayLines": "MDF_TeammateCount1"
                    },
                    "MDF_CritDmg1": {
                      "displayLines": "0.2"
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
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}