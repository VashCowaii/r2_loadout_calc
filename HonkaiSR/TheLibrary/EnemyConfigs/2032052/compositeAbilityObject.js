const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2032052,
  "trimCharacterName": 2032052,
  "abilityList": [
    "2032052_Monster_W2_FeixiaoPart_03_IF_PassiveAbilityInitiate",
    "2032052_Monster_W2_FeixiaoPart_02_IF_PassiveAbilityInitiate",
    "2032052_Monster_W2_FeixiaoPart_01_IF_PassiveAbilityInitiate",
    "2032052_Monster_W2_FeixiaoPart_IF_PassiveAbilityInitiate",
    "2032052_Monster_W2_FeixiaoPart_PassiveAbility_Insert2",
    "2032052_Monster_W2_FeixiaoPart_Ability06_Part02",
    "2032052_Monster_W2_FeixiaoPart_Ability06_Part01",
    "2032052_Monster_W2_FeixiaoPart_Ability05_Part02",
    "2032052_Monster_W2_FeixiaoPart_Ability05_Part01",
    "2032052_Monster_W2_FeixiaoPart_Ability04_Part02",
    "2032052_Monster_W2_FeixiaoPart_Ability04_Part01",
    "2032052_Monster_W2_FeixiaoPart_Ability03_Part02",
    "2032052_Monster_W2_FeixiaoPart_Ability03_Part01",
    "2032052_Monster_W2_FeixiaoPart_Ability02_Part02",
    "2032052_Monster_W2_FeixiaoPart_Ability02_Part01",
    "2032052_Monster_W2_FeixiaoPart_Ability01_Part02",
    "2032052_Monster_W2_FeixiaoPart_Ability01_Part01",
    "2032052_Monster_W2_FeixiaoPart_03_PassiveAbilityInitiate",
    "2032052_Monster_W2_FeixiaoPart_02_PassiveAbilityInitiate",
    "2032052_Monster_W2_FeixiaoPart_01_PassiveAbilityInitiate",
    "2032052_Monster_W2_FeixiaoPart_PassiveAbilityInitiate",
    "2032052_Modifiers"
  ],
  "abilityObject": {
    "2032052_Monster_W2_FeixiaoPart_03_IF_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_03_IF_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Feixiao: Self}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill06DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self Initial}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill06DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_02_IF_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_02_IF_PassiveAbilityInitiate",
      "skillTrigger": "Passive01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Feixiao: Self}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill05DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self Initial}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill05DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_01_IF_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_01_IF_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Feixiao: Self}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill04DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self Initial}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill04DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_IF_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_IF_PassiveAbilityInitiate",
      "abilityType": null,
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
    },
    "2032052_Monster_W2_FeixiaoPart_PassiveAbility_Insert2": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_PassiveAbility_Insert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability06_Part02": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill06DamagePercentage) || RETURN",
              "displayLines": "Skill06DamagePercentage",
              "constants": [],
              "variables": [
                "Skill06DamagePercentage"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability06_Part01": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability06_Part01",
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
          "ability": "Monster_W2_FeixiaoPart_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability05_Part02": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Feixiao: Skill05 Target}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 3
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Feixiao: Skill05 Target}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill05DamagePercentage) || RETURN",
              "displayLines": "Skill05DamagePercentage",
              "constants": [],
              "variables": [
                "Skill05DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill05DamagePercentage) || RETURN",
              "displayLines": "Skill05DamagePercentage",
              "constants": [],
              "variables": [
                "Skill05DamagePercentage"
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability05_Part01": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability05_Part01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "ability": "Monster_W2_FeixiaoPart_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability04_Part02": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill04DamagePercentage) || RETURN",
              "displayLines": "Skill04DamagePercentage",
              "constants": [],
              "variables": [
                "Skill04DamagePercentage"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability04_Part01": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability04_Part01",
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
          "ability": "Monster_W2_FeixiaoPart_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability03_Part02": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nebula Devourer: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nebula Devourer: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability03_Part01": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability03_Part01",
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
          "ability": "Monster_W2_FeixiaoPart_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability02_Part02": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Feixiao: Skill05 Target}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 3
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Feixiao: Skill05 Target}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Set Target Parameter",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "paramTarget": {
            "name": "Target Name",
            "target": "{{Enemy Team All, ST, and Blast}} + {{ST and Blast}}.[[getCharByChangeSource]]"
          },
          "variableName": "CameraTarget"
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1683392657\">Monster_W2_Feixiao_Ability05_Target</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nebula Devourer: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nebula Devourer: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability02_Part01": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability02_Part01",
      "childAbilityList": [
        "2032052_Monster_W2_FeixiaoPart_Ability02_Part01",
        "2032052_Monster_W2_FeixiaoPart_Ability02_Part02",
        "2032052_Monster_W2_FeixiaoPart_Ability02_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_FeixiaoPart_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability01_Part02": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nebula Devourer: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Nebula Devourer: Self}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Nebula Devourer: Self}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_Ability01_Part01": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_Ability01_Part01",
      "childAbilityList": [
        "2032052_Monster_W2_FeixiaoPart_Ability01_Part01"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_FeixiaoPart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_03_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_03_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Feixiao: Self}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill06DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self Initial}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill06DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1928525254\">Monster_W2_FeixiaoPart_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "MDF_BreakActionDelay": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "MDF_SuperArmorBreakDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_02_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_02_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Feixiao: Self}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill05DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self Initial}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill05DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1928525254\">Monster_W2_FeixiaoPart_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "MDF_BreakActionDelay": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "MDF_SuperArmorBreakDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_01_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_01_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Feixiao: Self}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill04DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Nebula Devourer: Self Initial}}"
          },
          "scope": "TargetEntity",
          "variableName": "Skill04DamagePercentage",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1928525254\">Monster_W2_FeixiaoPart_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            },
            "MDF_BreakActionDelay": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            },
            "MDF_SuperArmorBreakDamageAddedRatio": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Monster_W2_FeixiaoPart_PassiveAbilityInitiate": {
      "fileName": "2032052_Monster_W2_FeixiaoPart_PassiveAbilityInitiate",
      "abilityType": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"-2121118445\">Monster_W2_FeixiaoPart_PartController</a>"
        },
        {
          "name": "Set Enemy Phase",
          "phase": 2,
          "applyOverride": false
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
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
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 2033021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Ecliptic Inner Beast & Shadow of \"Feixiao\""
          }
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2032052_Modifiers": {
      "fileName": "2032052_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__481524779\">Monster_W2_FeixiaoPart_IF_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_FeixiaoPart_PassiveAbility_Insert2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__336936166\">Monster_W2_FeixiaoPart_MainUnselectable</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1.0011718e-7
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__637793327\">Monster_W2_FeixiaoPart_Formation</a>",
          "modifierFlags": [
            "ForceEnableFormationSetBodyPart"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2121118445\">Monster_W2_FeixiaoPart_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
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
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_FeixiaoPart_PassiveAbility_Insert2",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1928525254\">Monster_W2_FeixiaoPart_SuperArmorController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 5
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 2035011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Shadow of \"Feixiao\""
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeResistance": {
                              "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                              "displayLines": "MDF_SuperArmorDamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_SuperArmorDamageResistance"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                          "valuePerStack": {
                            "MDF_AllDamageTypeResistance": {
                              "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                              "displayLines": "MDF_SuperArmorDamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_SuperArmorDamageResistance"
                              ]
                            }
                          }
                        }
                      ]
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"221422164\">Monster_W2_Feixiao_ModifyActionDelay</a>",
                  "valuePerStack": {
                    "MDF_BreakActionDelay": {
                      "operator": "Variables[0] (MDF_BreakActionDelay) || RETURN",
                      "displayLines": "MDF_BreakActionDelay",
                      "constants": [],
                      "variables": [
                        "MDF_BreakActionDelay"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_SuperArmorBreakDamageAddedRatio) || RETURN",
                      "displayLines": "MDF_SuperArmorBreakDamageAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorBreakDamageAddedRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeResistance": {
                      "operator": "Variables[0] (MDF_SuperArmorDamageResistance) || RETURN",
                      "displayLines": "MDF_SuperArmorDamageResistance",
                      "constants": [],
                      "variables": [
                        "MDF_SuperArmorDamageResistance"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SuperArmorDamageResistance",
            "MDF_BreakActionDelay",
            "MDF_SuperArmorBreakDamageAddedRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"506782608\">Monster_W2_FeixiaoPart_TailNormalEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Worldpurge Tail"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032061,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Worldpurge Tail"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-31609686\">Monster_W2_FeixiaoPart_LimbNormalEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032050,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Planeshred Claws"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032051,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Planeshred Claws"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1365495312\">Monster_W2_FeixiaoPart_HeadNormalEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032040,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Nebula Devourer"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032041,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Nebula Devourer"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__506782608\">Monster_W2_FeixiaoPart_TailNormalEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Worldpurge Tail"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032061,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Worldpurge Tail"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-31609686\">Monster_W2_FeixiaoPart_LimbNormalEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032050,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Planeshred Claws"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032051,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Planeshred Claws"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1365495312\">Monster_W2_FeixiaoPart_HeadNormalEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032040,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Nebula Devourer"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032041,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Nebula Devourer"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__239356205\">Monster_W2_Feixiao_ChargeEffectControl</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032040,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Nebula Devourer"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032041,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Nebula Devourer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032050,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Planeshred Claws"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032051,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Planeshred Claws"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 2032060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Worldpurge Tail"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2032061,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Worldpurge Tail"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnhancePartNum",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhancePartNum",
                          "value": {
                            "operator": "Variables[0] (EnhancePartNum) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(EnhancePartNum - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "EnhancePartNum"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1193715835\">Monster_W2_FeixiaoPart_Part3ResidentEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-452452552\">Monster_W2_FeixiaoPart_Part3EffectSpecial</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1302036093\">Monster_W2_FeixiaoPart_Part3Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1095211474\">Monster_W2_FeixiaoPart_Part2ResidentEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-255389438\">Monster_W2_FeixiaoPart_Part2Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1236954137\">Monster_W2_FeixiaoPart_Unselectable</a>",
          "modifierFlags": [
            "Stealth",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}