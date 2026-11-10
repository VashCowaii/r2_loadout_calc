const configAbility = {
  "fileName": "Gilgamesh_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1526947844\">function_Gilgamesh_KingCount</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Avatar_Gilgamesh_00_KingCount + KingCountAdd)"
          },
          "variableName": "Avatar_Gilgamesh_00_KingCount"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Avatar_Gilgamesh_00_KingCount"
          },
          "bar#": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"872801045\">Gilgamesh_PassiveSpeed</a>[<span class=\"descriptionNumberColor\">\"Amuse Me to the Fullest\"</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Avatar_Gilgamesh_00_IsFirstTime",
                "compareType": "=",
                "value2": {
                  "displayLines": "0"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "Avatar_Gilgamesh_00_KingCount",
                "compareType": ">=",
                "value2": {
                  "displayLines": "10"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "Avatar_Gilgamesh_00_IsFirstTime"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "Avatar_Gilgamesh_00_FirstHappyTurn"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1040682786\">Gilgamesh_Lazy</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "Avatar_Gilgamesh_00_KingCount"
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 4
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1937334192\">Gilgamesh_DamageUp</a>[<span class=\"descriptionNumberColor\">Interest Piqued!</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"646197750\">Gilgamesh_Ability02_CD</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}