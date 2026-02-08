const configAbility = {
  "fileName": "Huohuo_Huohuo_Eidolon2_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1608829904\">Huohuo_Passive</a>"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "Huohuo_Rank02_ReviveCount",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Huohuo_Passive_HotCount",
              "value": -1,
              "max": 2
            },
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
              "function": "Add",
              "valueType": "Duration"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Huohuo_Rank02_ReviveCount",
              "value": -1,
              "max": 2
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "silent": true
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healer": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "healPercent": {
                "operator": "Variables[0] (AADF_1) || RETURN",
                "displayLines": "AADF_1",
                "constants": [],
                "variables": [
                  "AADF_1"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Huohuo_Rank02_ReviveCount",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}