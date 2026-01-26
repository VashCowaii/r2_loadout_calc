const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability21_Anim2_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextAbility",
      "variableName": "ADF_Effect_Index",
      "value": {
        "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (FLOOR) || Variables[2] (ComboHitCount) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Constants[0] (2) || PARAM_2 || FUNCTION || RETURN",
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)",
        "constants": [
          2
        ],
        "variables": [
          "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
          "FLOOR",
          "ComboHitCount"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "ADF_Effect_Index",
        "compareType": "=",
        "value2": 0
      }
    }
  ],
  "references": []
}