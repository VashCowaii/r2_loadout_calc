const configAbility = {
  "fileName": "5012040_Monster_W2_Mecha01_03_Passive",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "IceResistance"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-391821356\">W2_Mecha01_03_Resistance_Ice</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-391821356\">W2_Mecha01_03_Resistance_Ice</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Appear_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Trigger_Flag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Trigger_Flag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Damage Type/Element",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "list": [
                  "Ice"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Appear_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Trigger_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Trigger_Flag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}