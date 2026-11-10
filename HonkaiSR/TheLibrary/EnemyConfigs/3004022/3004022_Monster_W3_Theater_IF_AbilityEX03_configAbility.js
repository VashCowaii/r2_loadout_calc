const configAbility = {
  "fileName": "3004022_Monster_W3_Theater_IF_AbilityEX03",
  "skillTrigger": "SkillEX03",
  "abilityType": "Talent",
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
        "value2": 3
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-814879412\">Enemy_W3_Theater_IF_AbilityEX03</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-814879412\">Enemy_W3_Theater_IF_AbilityEX03</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": 300202200,
          "variableName": "SummonID01"
        },
        {
          "name": "Define Custom Variable",
          "value": 300201200,
          "variableName": "SummonID02"
        },
        {
          "name": "Define Custom Variable",
          "value": 300301500,
          "variableName": "SummonID03"
        },
        {
          "name": "Define Custom Variable",
          "value": 300201200,
          "variableName": "SummonID04"
        },
        {
          "name": "Define Custom Variable",
          "value": 300204200,
          "variableName": "SummonID05"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}