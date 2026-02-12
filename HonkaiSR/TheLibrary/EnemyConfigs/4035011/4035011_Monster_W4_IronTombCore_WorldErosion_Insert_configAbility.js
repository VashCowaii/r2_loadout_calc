const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_WorldErosion_Insert",
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
          "target": "{{Irontomb: Phantom}}"
        },
        "value1": "_PhaseLock",
        "compareType": "=",
        "value2": 1
      }
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 0
          }
        ]
      }
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "popUpText": "Descent into Chaos"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "_WorldErosion",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] ({[PassiveSkill01[2]]}) || Constants[0] (100) || MUL || RETURN",
              "displayLines": "({[PassiveSkill01[2]]} * 100)",
              "constants": [
                100
              ],
              "variables": [
                "{[PassiveSkill01[2]]}"
              ]
            }
          },
          {
            "name": "Compare: Variable",
            "value1": "#PassiveSkill01_P3_Percentage",
            "compareType": ">",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
          "valuePerStack": {
            "MDF_BPMaxCost": 4,
            "MDF_DirtyHPRatio_PerLayer": {
              "operator": "Constants[0] (4) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
              "displayLines": "(4 * {[PassiveSkill01[4]]})",
              "constants": [
                4
              ],
              "variables": [
                "{[PassiveSkill01[4]]}"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "_WorldErosion",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (100) || MUL || RETURN",
                  "displayLines": "({[PassiveSkill01[1]]} * 100)",
                  "constants": [
                    100
                  ],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "#PassiveSkill01_P2_Percentage",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
              "valuePerStack": {
                "MDF_BPMaxCost": 2,
                "MDF_DirtyHPRatio_PerLayer": {
                  "operator": "Constants[0] (2) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                  "displayLines": "(2 * {[PassiveSkill01[4]]})",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "{[PassiveSkill01[4]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_WorldErosion",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Constants[0] (100) || MUL || RETURN",
                      "displayLines": "({[PassiveSkill01[0]]} * 100)",
                      "constants": [
                        100
                      ],
                      "variables": [
                        "{[PassiveSkill01[0]]}"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "#PassiveSkill01_P1_Percentage",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                  "valuePerStack": {
                    "MDF_BPMaxCost": 1,
                    "MDF_DirtyHPRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[4]]}"
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
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Phantom}}"
        },
        "value1": "_PhaseLock",
        "compareType": "=",
        "value2": 1
      }
    }
  ],
  "references": []
}