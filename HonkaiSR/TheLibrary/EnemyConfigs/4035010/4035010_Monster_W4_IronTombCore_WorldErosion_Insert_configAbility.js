const configAbility = {
  "fileName": "4035010_Monster_W4_IronTombCore_WorldErosion_Insert",
  "skillTrigger": "WorldErosion",
  "abilityType": "Skill",
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
              "displayLines": "({[PassiveSkill01[2]]} * 100)"
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
              "displayLines": "(4 * {[PassiveSkill01[4]]})"
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
                  "displayLines": "({[PassiveSkill01[1]]} * 100)"
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
                  "displayLines": "(2 * {[PassiveSkill01[4]]})"
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
                      "displayLines": "({[PassiveSkill01[0]]} * 100)"
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
                      "displayLines": "{[PassiveSkill01[4]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}