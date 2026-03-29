const configAbility = {
  "fileName": "3003015_Monster_W3_Theater_IF_AbilityEX02",
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
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-798101793\">Enemy_W3_Theater_IF_AbilityEX02</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": "=",
        "value2": 2
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