const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2022100,
  "trimCharacterName": 2022100,
  "abilityList": [
    "2022100_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
    "2022100_Monster_W2_Xuanlu_04_Ability02_Part02",
    "2022100_Monster_W2_Xuanlu_04_Ability02_Part01",
    "2022100_Monster_W2_Xuanlu_04_Ability01_Part02",
    "2022100_Monster_W2_Xuanlu_04_Ability01_Part01",
    "2022100_Modifiers"
  ],
  "abilityObject": {
    "2022100_Monster_W2_Xuanlu_01_PassiveAbility_Effect": {
      "fileName": "2022100_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
      "skillTrigger": "Passive",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "2022100_Monster_W2_Xuanlu_04_Ability02_Part02": {
      "fileName": "2022100_Monster_W2_Xuanlu_04_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1305390378\">Enemy_W2_Xuanlu_04_Charge</a>[<span class=\"descriptionNumberColor\">Lavish Fruit</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "MonsterType_Xuanlu"
                }
              }
            ]
          },
          "scope": "TargetEntity",
          "variableName": "CanUseUltra",
          "value": 1
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "MonsterType_Xuanlu"
                }
              }
            ]
          },
          "set": 0
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2022100_Monster_W2_Xuanlu_04_Ability02_Part01": {
      "fileName": "2022100_Monster_W2_Xuanlu_04_Ability02_Part01",
      "childAbilityList": [
        "2022100_Monster_W2_Xuanlu_04_Ability02_Part01",
        "2022100_Monster_W2_Xuanlu_04_Ability02_Part02",
        "2022100_Monster_W2_Xuanlu_04_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Xuanlu_04_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2022100_Monster_W2_Xuanlu_04_Ability01_Part02": {
      "fileName": "2022100_Monster_W2_Xuanlu_04_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1305390378\">Enemy_W2_Xuanlu_04_Charge</a>[<span class=\"descriptionNumberColor\">Lavish Fruit</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_Xuanlu"
                  }
                }
              ]
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1142936642\">Enemy_W2_Xuanlu_Mainline_Final</a>"
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2022100_Monster_W2_Xuanlu_04_Ability01_Part01": {
      "fileName": "2022100_Monster_W2_Xuanlu_04_Ability01_Part01",
      "childAbilityList": [
        "2022100_Monster_W2_Xuanlu_04_Ability01_Part01",
        "2022100_Monster_W2_Xuanlu_04_Ability01_Part02",
        "2022100_Monster_W2_Xuanlu_04_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Xuanlu_04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2022100_Modifiers": {
      "fileName": "2022100_Modifiers",
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
          "description": "When there are 2 Lavish Fruits on the field, the Abundant Ebon Deer will immediately use Flamboyant Gore.",
          "type": "Other",
          "effectName": "Bearing Fruit",
          "statusName": "Lavish Fruit",
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
          ]
        }
      ],
      "references": []
    }
  }
}