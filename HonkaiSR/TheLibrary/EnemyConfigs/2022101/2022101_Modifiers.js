const configAbility = {
  "fileName": "2022101_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1305390378\">Enemy_W2_Xuanlu_04_Charge</a>[<span class=\"descriptionNumberColor\">Lavish Fruit</span>]",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "Xuanlu_04_Charged",
                "compareType": ">",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "Xuanlu_04_Charged",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || RETURN",
                    "displayLines": "-1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When there are 2 Lavish Fruits on the field, the Abundant Ebon Deer will immediately use Flamboyant Gore.",
      "type": "Other",
      "effectName": "Bearing Fruit",
      "statusName": "Lavish Fruit"
    }
  ],
  "references": []
}