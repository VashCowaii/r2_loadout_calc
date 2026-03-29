const configAbility = {
  "fileName": "2033022_Monster_W2_FeixiaoPart_IF_PassiveAbilityInitiate",
  "skillTrigger": "Passive01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"481524779\">Monster_W2_FeixiaoPart_IF_PartController</a>"
    },
    {
      "name": "Set Enemy Phase",
      "applyOverride": false
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"637793327\">Monster_W2_FeixiaoPart_Formation</a>"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "FeixiaoPart",
      "state": false
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Head",
      "value": {
        "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
        "displayLines": "PartEntity1_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity1_MonsterID"
        ]
      },
      "offset": 2,
      "linkHitByPart": true
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Limb",
      "value": {
        "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
        "displayLines": "PartEntity2_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity2_MonsterID"
        ]
      },
      "offset": -1,
      "type": 2,
      "linkHitByPart": true
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Tail",
      "value": {
        "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
        "displayLines": "PartEntity3_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity3_MonsterID"
        ]
      },
      "offset": -2,
      "type": 3,
      "linkHitByPart": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1365495312\">Monster_W2_FeixiaoPart_HeadNormalEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-31609686\">Monster_W2_FeixiaoPart_LimbNormalEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"506782608\">Monster_W2_FeixiaoPart_TailNormalEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1095211474\">Monster_W2_FeixiaoPart_Part2ResidentEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1236954137\">Monster_W2_FeixiaoPart_Unselectable</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1306733131\">Monster_W2_Feixiao_Stop</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1586170110\">Monster_W2_FeixiaoPart_IF_Status</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1666463717\">Monster_W2_FeixiaoPart_IF_AvatarStatus</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (_TurnCount) || RETURN",
        "displayLines": "_TurnCount",
        "constants": [],
        "variables": [
          "_TurnCount"
        ]
      },
      "entityClass": "Enemy",
      "maximum": 4,
      "assignState": "True",
      "barType": "BossDot"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1666463717\">Monster_W2_FeixiaoPart_IF_AvatarStatus</a>",
      "execute": [
        {
          "eventTrigger": "Departed State: Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "variableName": "_CharacterCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_TurnCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CharacterCount",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "variableName": "_CharacterCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_TurnCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CharacterCount",
                    "compareType": ">",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1586170110\">Monster_W2_FeixiaoPart_IF_Status</a>",
      "modifierFlags": [
        "MuteAttachWeakness",
        "ImmuneDebuff"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_FirstAlert",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Inflict Weakness Break on the parts to reduce the boss's Toughness"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_FirstAlert",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Head}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Claws}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Tail}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "variableName": "_CharacterCount",
              "livingTargets": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_TurnCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_CharacterCount",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"239356205\">Monster_W2_Feixiao_ChargeEffectControl</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1057448385\">Monster_W2_Feixiao_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"284964038\">Monster_W2_Feixiao_Unselectable</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Head}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Claws}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Tail}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]"
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-641086431\">Standard_SuperArmorBreak_Mark</a>"
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_TurnCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 4,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "variableName": "_CharacterCount",
                  "livingTargets": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_TurnCount",
                        "compareType": "<=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_CharacterCount",
                        "compareType": ">",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_TurnCount) || RETURN",
                    "displayLines": "_TurnCount",
                    "constants": [],
                    "variables": [
                      "_TurnCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 4,
                  "assignState": "True",
                  "barType": "BossDot"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 3,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Inflict Weakness Break on the parts to reduce the boss's Toughness"
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