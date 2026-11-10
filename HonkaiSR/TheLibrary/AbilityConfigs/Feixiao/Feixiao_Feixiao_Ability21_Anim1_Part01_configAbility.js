const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability21_Anim1_Part01",
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
      "variableName": "ADF_Effect_Index",
      "resetValue": {
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)"
      },
      "scope": "ContextAbility"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}