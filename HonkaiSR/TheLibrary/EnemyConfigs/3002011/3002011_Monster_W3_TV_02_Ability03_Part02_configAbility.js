const configAbility = {
  "fileName": "3002011_Monster_W3_TV_02_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 0
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
          "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Theater_Rogue"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}