const configAbility = {
  "fileName": "3003015_Monster_W3_TV_02_IF_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "FlopSide",
      "value": {
        "operator": "Variables[0] (FlopSide) || INVERT || RETURN",
        "displayLines": "-FlopSide",
        "constants": [],
        "variables": [
          "FlopSide"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FlopSide",
        "compareType": "=",
        "value2": -1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}