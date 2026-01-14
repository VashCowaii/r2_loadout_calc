const configAbility = {
  "fileName": "Robin_Robin_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sequential Passage"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "value": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": "Caster",
      "inherentTarget": "Single Target (Primary)",
      "ability": "Robin_Ability02_FriendAttack"
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}