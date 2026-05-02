const configAbility = {
  "fileName": "Welt_Advanced_Welt_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1794214494\">Advanced_Welt_Ultimate_ExtraSP</a>",
      "valuePerStack": {
        "MDF_AddValue": {
          "operator": "Variables[0] (5) || RETURN",
          "displayLines": "5",
          "constants": [],
          "variables": [
            5
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"84847530\">Advanced_Welt_Trace03_StatusProbabilityShow</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1794214494\">Advanced_Welt_Ultimate_ExtraSP</a>",
      "stackData": [
        "MDF_AddValue"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_AddValue) || RETURN",
                    "displayLines": "MDF_AddValue",
                    "constants": [],
                    "variables": [
                      "MDF_AddValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}