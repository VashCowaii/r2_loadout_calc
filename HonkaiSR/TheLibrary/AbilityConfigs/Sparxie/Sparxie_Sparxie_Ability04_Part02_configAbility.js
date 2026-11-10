const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Looped Event",
      "maxLoops": 5
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
        "displayLines": "2"
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
        "displayLines": "Sparxie_EnergyPoint"
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
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_CurrentEP / 1))"
          },
          "variableName": "_Rank06_ExtraDamage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Rank06_ExtraDamage",
            "compareType": ">",
            "value2": {
              "displayLines": "(40 - 20)"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(40 - 20)"
              },
              "variableName": "_Rank06_ExtraDamage"
            }
          ]
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(20 + _Rank06_ExtraDamage)"
      },
      "execute": [
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}