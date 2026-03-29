const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_EX03_PassiveAbility",
  "skillTrigger": "SkillEX03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
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
          "modifier": "<a class=\"gModGreen\" id=\"1172706032\">Enemy_W3_Sunday_IF_EX03_Boss</a>"
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
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1172706032\">Enemy_W3_Sunday_IF_EX03_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1936839498\">Enemy_W3_Sunday_WeaknessResistance</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1936839498\">Enemy_W3_Sunday_WeaknessResistance</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1704895932\">Enemy_W3_Sunday_IF_EX03_Insert</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Weakness_CountDown",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Weakness_CountDown",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1704895932\">Enemy_W3_Sunday_IF_EX03_Insert</a>"
                },
                {
                  "name": "UI Display Event",
                  "popUpText": "Enemy Weaknesses will be reset at the boss's next action!"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Enemy Weaknesses will be reset after the boss takes 2 actions!"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 3,
              "maxValue": 3,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Enemy Weaknesses will be reset after the boss takes 3 actions!"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 4,
              "maxValue": 4,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Enemy Weaknesses will be reset after the boss takes 4 actions!"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 5,
              "maxValue": 5,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Enemy Weaknesses will be reset after the boss takes 5 actions!"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 6,
              "maxValue": 6,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Enemy Weaknesses will be reset after the boss takes 6 actions!"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 7,
              "maxValue": 7,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Enemy Weaknesses will be reset after the boss takes 7 actions!"
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