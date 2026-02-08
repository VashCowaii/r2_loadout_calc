const configAbility = {
  "fileName": "Luocha_Luocha_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Cleansing Revival"
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "CurrentHP%",
            "compareType": "<",
            "value2": 0.5
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"774057346\">Luocha_Ability02_AddHealRatio</a>",
              "valuePerStack": {
                "MDF_AddHealRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1298017769\">Luocha_Ability02_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_ShieldPercentage": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                },
                "MDF_ShieldValue": {
                  "operator": "Variables[0] (240) || RETURN",
                  "displayLines": "240",
                  "constants": [],
                  "variables": [
                    240
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.6) || RETURN",
        "displayLines": "0.6",
        "constants": [],
        "variables": [
          0.6
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (800) || RETURN",
        "displayLines": "800",
        "constants": [],
        "variables": [
          800
        ]
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1807885982\">Luocha_Passive01_HealHPArea</a>"
      },
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-390780291\">Luocha_Passive01Modifier</a>[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
          "valuePerStack": {
            "MDF_PassiveLayer": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "IsInserAbilityTrigger",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        "Trigger: Ability End"
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "IsInserAbilityTrigger",
          "value": 0
        }
      ]
    }
  ],
  "references": []
}