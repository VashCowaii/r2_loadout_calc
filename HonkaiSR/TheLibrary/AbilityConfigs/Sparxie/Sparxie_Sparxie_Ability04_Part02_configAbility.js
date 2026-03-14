const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 5,
      "Event": []
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1081099960\">Sparxie_ElationAbility_Aoe</a>"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Sparxie_EnergyPoint",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "Modify Skill-Point Extras",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "function": "Set",
      "value": {
        "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
        "displayLines": "Sparxie_EnergyPoint",
        "constants": [],
        "variables": [
          "Sparxie_EnergyPoint"
        ]
      },
      "silentChange": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "variableName": "_CurrentEP"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank06_ExtraDamage",
          "value": {
            "operator": "Variables[0] (FLOOR) || Variables[1] (_CurrentEP) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_CurrentEP / 1))",
            "constants": [],
            "variables": [
              "FLOOR",
              "_CurrentEP",
              1
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Rank06_ExtraDamage",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (40) || Variables[1] (20) || SUB || RETURN",
              "displayLines": "(40 - 20)",
              "constants": [],
              "variables": [
                40,
                20
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Rank06_ExtraDamage",
              "value": {
                "operator": "Variables[0] (40) || Variables[1] (20) || SUB || RETURN",
                "displayLines": "(40 - 20)",
                "constants": [],
                "variables": [
                  40,
                  20
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (20) || Variables[1] (_Rank06_ExtraDamage) || ADD || RETURN",
        "displayLines": "(20 + _Rank06_ExtraDamage)",
        "constants": [],
        "variables": [
          20,
          "_Rank06_ExtraDamage"
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1984031563\">Sparxie_ElationAbility_Single</a>"
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}