const configAbility = {
  "fileName": "3002012_Monster_W3_Theater_IF_AbilityEX04",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-831657031\">Enemy_W3_Theater_IF_AbilityEX04</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-831657031\">Enemy_W3_Theater_IF_AbilityEX04</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": "=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID01",
          "value": 300202200
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID02",
          "value": 300201200
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID03",
          "value": 300301500
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID04",
          "value": 300201200
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonID05",
          "value": 300204200
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}