const configAbility = {
  "fileName": "Bailu_Bailu_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1229024343\">Bailu_Eidolon4</a>"
        }
      ]
    },
    {
      "name": "Shot Fired",
      "projectileCount": 1,
      "execute": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.117) || RETURN",
            "displayLines": "0.117",
            "constants": [],
            "variables": [
              0.117
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (312) || RETURN",
            "displayLines": "312",
            "constants": [],
            "variables": [
              312
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_HealPercentage",
      "value": {
        "operator": "Variables[0] (0.117) || RETURN",
        "displayLines": "0.117",
        "constants": [],
        "variables": [
          0.117
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_HealValue",
      "value": {
        "operator": "Variables[0] (312) || RETURN",
        "displayLines": "312",
        "constants": [],
        "variables": [
          312
        ]
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_HealPercentage",
          "value": {
            "operator": "Variables[0] (MDF_HealPercentage) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
            "displayLines": "(MDF_HealPercentage * (1 - 0.15))",
            "constants": [
              1
            ],
            "variables": [
              "MDF_HealPercentage",
              0.15
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_HealValue",
          "value": {
            "operator": "Variables[0] (MDF_HealValue) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
            "displayLines": "(MDF_HealValue * (1 - 0.15))",
            "constants": [
              1
            ],
            "variables": [
              "MDF_HealValue",
              0.15
            ]
          }
        },
        {
          "name": "Shot Fired",
          "projectileCount": 1,
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                "displayLines": "MDF_HealPercentage",
                "constants": [],
                "variables": [
                  "MDF_HealPercentage"
                ]
              },
              "healFlat": {
                "operator": "Variables[0] (MDF_HealValue) || RETURN",
                "displayLines": "MDF_HealValue",
                "constants": [],
                "variables": [
                  "MDF_HealValue"
                ]
              },
              "formula": "Heal from Healer's MaxHP"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(2 - 1)",
        "constants": [
          1
        ],
        "variables": [
          2
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HealPercentage",
              "value": {
                "operator": "Variables[0] (MDF_HealPercentage) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
                "displayLines": "(MDF_HealPercentage * (1 - 0.15))",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_HealPercentage",
                  0.15
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HealValue",
              "value": {
                "operator": "Variables[0] (MDF_HealValue) || Constants[0] (1) || Variables[1] (0.15) || SUB || MUL || RETURN",
                "displayLines": "(MDF_HealValue * (1 - 0.15))",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_HealValue",
                  0.15
                ]
              }
            },
            {
              "name": "Shot Fired",
              "projectileCount": 1,
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                    "displayLines": "MDF_HealPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_HealPercentage"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_HealValue) || RETURN",
                    "displayLines": "MDF_HealValue",
                    "constants": [],
                    "variables": [
                      "MDF_HealValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
                }
              ]
            }
          ]
        }
      ]
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
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1229024343\">Bailu_Eidolon4</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}