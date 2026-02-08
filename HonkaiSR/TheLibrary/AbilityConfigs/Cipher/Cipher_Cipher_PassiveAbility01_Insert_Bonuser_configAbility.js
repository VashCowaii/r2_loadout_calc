const configAbility = {
  "fileName": "Cipher_Cipher_PassiveAbility01_Insert_Bonuser",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "living": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "Passive_Trigger_Count",
          "value": {
            "operator": "Variables[0] (Passive_Trigger_Count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Passive_Trigger_Count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Passive_Trigger_Count"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Passive_Trigger_Count",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (Passive_Max_Count) || RETURN",
              "displayLines": "Passive_Max_Count",
              "constants": [],
              "variables": [
                "Passive_Max_Count"
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"4491835\">Cipher_BpKuoSan_Insert_CD</a>[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]"
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "Cipher_PassiveAbility01_Insert_Part01",
          "isTrigger": true
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "CurrentHP%",
                  "compareType": ">",
                  "value2": 0
                }
              },
              "Shuffle Targets",
              {
                "name": "Sort by Stat",
                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                "sortByHighest": true
              },
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "living": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "Passive_Trigger_Count",
              "value": {
                "operator": "Variables[0] (Passive_Trigger_Count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Passive_Trigger_Count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Passive_Trigger_Count"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Passive_Trigger_Count",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (Passive_Max_Count) || RETURN",
                  "displayLines": "Passive_Max_Count",
                  "constants": [],
                  "variables": [
                    "Passive_Max_Count"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"4491835\">Cipher_BpKuoSan_Insert_CD</a>[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]"
                }
              ]
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Cipher_PassiveAbility01_Insert_Part01",
              "isTrigger": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-315567514\">Cipher_BpKuoSan_Insert_Bonuser</a>"
            }
          ]
        }
      ]
    }
  ],
  "onAbort": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-315567514\">Cipher_BpKuoSan_Insert_Bonuser</a>"
    }
  ],
  "references": []
}