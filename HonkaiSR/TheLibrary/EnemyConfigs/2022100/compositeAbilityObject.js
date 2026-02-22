const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2022100,
  "trimCharacterName": 2022100,
  "abilityList": [
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part02_RL",
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part01_RL",
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part02",
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part01",
    "2022100_Monster_W2_Xuanlu_01_PassiveAbility_Effect",
    "2022100_Monster_W2_Xuanlu_04_Ability02_Part02",
    "2022100_Monster_W2_Xuanlu_04_Ability02_Part01",
    "2022100_Monster_W2_Xuanlu_04_Ability01_Part02",
    "2022100_Monster_W2_Xuanlu_04_Ability01_Part01",
    "2022100_Modifiers"
  ],
  "abilityObject": {
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part02_RL": {
      "fileName": "2022100_Monster_W2_Xuanlu_01_Ability01_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
              "displayLines": "UnusedUnderThisBase_3",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_3"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_306) || RETURN",
            "displayLines": "UnusedUnderThisBase_306",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_306"
            ]
          },
          "baseChance": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_301) || RETURN",
            "displayLines": "UnusedUnderThisBase_301",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_301"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_302) || RETURN",
            "displayLines": "UnusedUnderThisBase_302",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_302"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_300) || RETURN",
              "displayLines": "UnusedUnderThisBase_300",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_300"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part01_RL": {
      "fileName": "2022100_Monster_W2_Xuanlu_01_Ability01_Part01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Xuanlu_01_Ability01_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part02": {
      "fileName": "2022100_Monster_W2_Xuanlu_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
              "displayLines": "UnusedUnderThisBase_3",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_3"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_306) || RETURN",
            "displayLines": "UnusedUnderThisBase_306",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_306"
            ]
          },
          "baseChance": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2022100_Monster_W2_Xuanlu_01_Ability01_Part01": {
      "fileName": "2022100_Monster_W2_Xuanlu_01_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Xuanlu_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
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
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-911926523\">Enemy_W2_Xuanlu_01_GroundEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
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
  }
}