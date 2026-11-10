const configAbility = {
  "fileName": "3004021_Monster_W3_Theater_IF_AbilityEX02",
  "skillTrigger": "SkillEX02",
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