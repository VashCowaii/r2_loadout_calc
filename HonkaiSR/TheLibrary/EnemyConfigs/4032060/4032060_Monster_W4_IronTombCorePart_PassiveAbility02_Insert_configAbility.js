const configAbility = {
  "fileName": "4032060_Monster_W4_IronTombCorePart_PassiveAbility02_Insert",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1656056004\">Enemy_W4_IronTombCorePart_Ability02_Mark</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Irontomb: Core}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-699052579\">Enemy_W4_IronTombCorePart_Ability02_Charge</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "ifTargetFound": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "popUpText": "Action Advanced"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Turn Is",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] ({[PassiveSkill02[0]]}) || INVERT || RETURN",
                "displayLines": "-{[PassiveSkill02[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[0]]}"
                ]
              },
              "adjustmentType": "Advance"
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Set",
              "multiAdd": "-{[PassiveSkill02[0]]}"
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Set",
              "multiAdd": "-{[PassiveSkill02[0]]}"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "NOT=",
            "value2": 3
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "ability": "Monster_W4_IronTombPhantom_Hit"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-778620552\">Enemy_W4_IronTombCore_Main_Status</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "value1": "_ChangePhaseEnd",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "value1": "_Break01Odds",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "value1": "_Break02Odds",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "value1": "_Break03Odds",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "value1": "_Break04Odds",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "value1": "_Break05Odds",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                {
                  "operator": "Variables[0] (_Break01Odds) || RETURN",
                  "displayLines": "_Break01Odds",
                  "constants": [],
                  "variables": [
                    "_Break01Odds"
                  ]
                },
                {
                  "operator": "Variables[0] (_Break02Odds) || RETURN",
                  "displayLines": "_Break02Odds",
                  "constants": [],
                  "variables": [
                    "_Break02Odds"
                  ]
                },
                {
                  "operator": "Variables[0] (_Break03Odds) || RETURN",
                  "displayLines": "_Break03Odds",
                  "constants": [],
                  "variables": [
                    "_Break03Odds"
                  ]
                },
                {
                  "operator": "Variables[0] (_Break04Odds) || RETURN",
                  "displayLines": "_Break04Odds",
                  "constants": [],
                  "variables": [
                    "_Break04Odds"
                  ]
                },
                {
                  "operator": "Variables[0] (_Break05Odds) || RETURN",
                  "displayLines": "_Break05Odds",
                  "constants": [],
                  "variables": [
                    "_Break05Odds"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1699685275\">Enemy_W4_IronTombCorePart_PartBreak_01</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1716462894\">Enemy_W4_IronTombCorePart_PartBreak_02</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1733240513\">Enemy_W4_IronTombCorePart_PartBreak_03</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1750018132\">Enemy_W4_IronTombCorePart_PartBreak_04</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1766795751\">Enemy_W4_IronTombCorePart_PartBreak_05</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}