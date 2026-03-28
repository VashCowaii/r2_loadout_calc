const configAbility = {
  "fileName": "4033010_Monster_XP_Elite01_02_Ability03_Part02",
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
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(RallyCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985995630\">Standard_AbilityTarget</a>"
        }
      ]
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "RallyCount",
        "compareType": ">",
        "value2": 0
      },
      "Event": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(RallyCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(RallyCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "RallyCount",
        "compareType": ">",
        "value2": 0
      },
      "Event": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(RallyCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(RallyCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "RallyCount",
        "compareType": ">",
        "value2": 0
      },
      "Event": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(RallyCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(RallyCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
      },
      "ifTargetFound": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "popUpText": "\"Corrosion\" is absorbed",
          "living": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1799178922\">Enemy_AML_Minion02_01_RallyHP_V2</a>[<span class=\"descriptionNumberColor\">Corrosion</span>]"
        }
      ]
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "RallyCount",
        "compareType": ">",
        "value2": 1
      },
      "Event": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1810848072\">Enemy_XP_Elite01_02_Charge</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "RallyCount",
          "value": {
            "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(RallyCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "RallyCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1810848072\">Enemy_XP_Elite01_02_Charge</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "RallyCount",
      "value": {
        "operator": "Variables[0] (RallyCount) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(RallyCount - 1)",
        "constants": [
          1
        ],
        "variables": [
          "RallyCount"
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}