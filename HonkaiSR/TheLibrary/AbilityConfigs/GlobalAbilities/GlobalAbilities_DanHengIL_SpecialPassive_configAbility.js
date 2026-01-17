const configAbility = {
  "fileName": "GlobalAbilities_DanHengIL_SpecialPassive",
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
      "modifier": "DanHengIL_SpecialPassiveModifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_SpecialModifier_DisableAbility",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Skill"
              ]
            }
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_SpecialPassiveModifier",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "TurnCount",
              "value": {
                "operator": "Variables[0] (TurnCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(TurnCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "TurnCount"
                ]
              }
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 5,
              "adjustmentType": "+"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EXSkill01",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 2,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TurnCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_SpecialModifier_DisableAbility",
                      "immediateEffect": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 3,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TurnCount",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_SpecialModifier_DisableAbility",
                      "immediateEffect": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 3,
              "maxValue": 4,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TurnCount",
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
                      "modifier": "DanHengIL_SpecialModifier_DisableAbility",
                      "immediateEffect": true
                    }
                  ]
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